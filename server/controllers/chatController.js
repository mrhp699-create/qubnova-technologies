const asyncHandler = require("../utils/asyncHandler");

const GEMINI_API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash";
const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_ITEMS = 8;

const systemInstruction = [
  "You are Nova, the friendly AI voice assistant for Qubnova Technologies.",
  "Help visitors understand Qubnova services, pricing direction, project planning, AI SaaS, automation, dashboards, web apps, and design work.",
  "Keep replies concise, conversational, and easy to speak aloud in 2 to 5 short sentences.",
  "If someone asks for a quote, ask for project goal, required features, timeline, and budget.",
  "Do not claim a booking is confirmed. Guide users to the Contact page or WhatsApp button for final booking.",
].join(" ");

const cleanText = (value, maxLength = MAX_MESSAGE_LENGTH) => {
  if (value === undefined || value === null) return "";
  return String(value).replace(/\s+/g, " ").trim().slice(0, maxLength);
};

const normalizeHistory = (history = []) => {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => ({
      role: item?.from === "user" ? "user" : "model",
      parts: [{ text: cleanText(item?.text, 600) }],
    }))
    .filter((item) => item.parts[0].text);
};

const getGeminiReplyText = (data) => {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return "";
  return parts
    .map((part) => part?.text)
    .filter(Boolean)
    .join("\n")
    .trim();
};

const getLocalNovaReply = (message) => {
  const normalizedMessage = message.toLowerCase();

  if (/\b(price|cost|budget|quote|package)\b/.test(normalizedMessage)) {
    return "Absolutely — I can help you think through pricing. Tell me what you want to build, the main features, your timeline, and your budget range, then Qubnova can guide you toward the right package.";
  }

  if (
    /\b(service|build|website|app|software|dashboard|saas|automation|ai)\b/.test(
      normalizedMessage,
    )
  ) {
    return "Yes, Qubnova can help with that. We build modern websites, web apps, dashboards, AI-ready tools, automations, and polished UI/UX experiences. What are you trying to create?";
  }

  if (/\b(contact|book|call|meeting|whatsapp|hire)\b/.test(normalizedMessage)) {
    return "Great — the best next step is to share your project details through the Contact page or the WhatsApp button. I can also help you prepare a short brief before you reach out.";
  }

  if (/\b(hello|hi|hey|salam|assalam)\b/.test(normalizedMessage)) {
    return "Hi, I am Nova. Nice to meet you. Tell me what you are planning, and I will help you shape it into a clear project idea.";
  }

  return "I am here with you. Tell me a little more about what you need, and I will respond like a project assistant — simple, clear, and focused on helping you move forward.";
};

const sendLocalNovaReply = (res, message, reason) => {
  res.json({
    success: true,
    provider: "local",
    model: "nova-helper",
    reply: getLocalNovaReply(message),
    notice: reason,
  });
};

const chatWithGemini = asyncHandler(async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;
  const message = cleanText(req.body?.message);
  const history = normalizeHistory(req.body?.history);

  if (!message) {
    res.status(400);
    throw new Error("Please type or speak a message first.");
  }

  if (!apiKey || apiKey === "paste-your-gemini-api-key-here") {
    return sendLocalNovaReply(
      res,
      message,
      "Gemini API key is not configured, so Nova used local helper mode.",
    );
  }

  if (typeof fetch !== "function") {
    return sendLocalNovaReply(
      res,
      message,
      "Node.js fetch is unavailable, so Nova used local helper mode.",
    );
  }

  let geminiResponse;

  try {
    geminiResponse = await fetch(
      `${GEMINI_API_BASE_URL}/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
          contents: [...history, { role: "user", parts: [{ text: message }] }],
          generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            maxOutputTokens: 260,
          },
        }),
      },
    );
  } catch (error) {
    return sendLocalNovaReply(
      res,
      message,
      `Gemini request failed: ${error.message}`,
    );
  }

  const data = await geminiResponse.json().catch(() => ({}));

  if (!geminiResponse.ok) {
    return sendLocalNovaReply(
      res,
      message,
      data?.error?.message || "Gemini could not answer right now.",
    );
  }

  const reply = getGeminiReplyText(data);

  if (!reply) {
    return sendLocalNovaReply(
      res,
      message,
      "Gemini returned an empty response.",
    );
  }

  res.json({
    success: true,
    provider: "gemini",
    model,
    reply,
  });
});

module.exports = { chatWithGemini };

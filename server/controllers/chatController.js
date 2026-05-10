const asyncHandler = require('../utils/asyncHandler');

const GEMINI_API_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';
const DEFAULT_GEMINI_MODEL = 'gemini-2.5-flash';
const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_ITEMS = 8;

const systemInstruction = [
  'You are Nova, the friendly AI voice assistant for Qubnova Technologies.',
  'Help visitors understand Qubnova services, pricing direction, project planning, AI SaaS, automation, dashboards, web apps, and design work.',
  'Keep replies concise, conversational, and easy to speak aloud in 2 to 5 short sentences.',
  'If someone asks for a quote, ask for project goal, required features, timeline, and budget.',
  'Do not claim a booking is confirmed. Guide users to the Contact page or WhatsApp button for final booking.',
].join(' ');

const cleanText = (value, maxLength = MAX_MESSAGE_LENGTH) => {
  if (value === undefined || value === null) return '';
  return String(value).replace(/\s+/g, ' ').trim().slice(0, maxLength);
};

const normalizeHistory = (history = []) => {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => ({
      role: item?.from === 'user' ? 'user' : 'model',
      parts: [{ text: cleanText(item?.text, 600) }],
    }))
    .filter((item) => item.parts[0].text);
};

const getGeminiReplyText = (data) => {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts.map((part) => part?.text).filter(Boolean).join('\n').trim();
};

const chatWithGemini = asyncHandler(async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;
  const message = cleanText(req.body?.message);
  const history = normalizeHistory(req.body?.history);

  if (!message) {
    res.status(400);
    throw new Error('Please type or speak a message first.');
  }

  if (!apiKey || apiKey === 'paste-your-gemini-api-key-here') {
    res.status(503);
    throw new Error('Gemini API key is missing. Paste your key in server/.env as GEMINI_API_KEY.');
  }

  if (typeof fetch !== 'function') {
    res.status(500);
    throw new Error('This server needs Node.js 18+ because Gemini requests use the built-in fetch API.');
  }

  const geminiResponse = await fetch(`${GEMINI_API_BASE_URL}/models/${model}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 260,
      },
    }),
  });

  const data = await geminiResponse.json();

  if (!geminiResponse.ok) {
    res.status(geminiResponse.status);
    throw new Error(data?.error?.message || 'Gemini could not answer right now.');
  }

  const reply = getGeminiReplyText(data);

  if (!reply) {
    res.status(502);
    throw new Error('Gemini returned an empty response. Please try again.');
  }

  res.json({
    success: true,
    provider: 'gemini',
    model,
    reply,
  });
});

module.exports = { chatWithGemini };

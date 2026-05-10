const asyncHandler = require('../utils/asyncHandler');

const GEMINI_API_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';
const DEFAULT_GEMINI_MODEL = 'gemini-2.5-flash';
const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_ITEMS = 8;
const GEMINI_TIMEOUT_MS = 30000;

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

  const normalized = history
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => ({
      role: item?.from === 'user' ? 'user' : 'model',
      text: cleanText(item?.text, 600),
    }))
    .filter((item) => item.text);

  // Gemini chat payloads must not start with a model turn, so drop Nova's opening greeting.
  while (normalized[0]?.role === 'model') {
    normalized.shift();
  }

  return normalized.reduce((items, item) => {
    const previous = items[items.length - 1];

    if (previous?.role === item.role) {
      previous.parts[0].text = `${previous.parts[0].text}\n${item.text}`;
      return items;
    }

    items.push({
      role: item.role,
      parts: [{ text: item.text }],
    });

    return items;
  }, []);
};

const getGeminiReplyText = (data) => {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts.map((part) => part?.text).filter(Boolean).join('\n').trim();
};

const readGeminiJson = async (response) => {
  const text = await response.text();

  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return {
      error: {
        message: text || 'Gemini returned a non-JSON response.',
      },
    };
  }
};

const buildGeminiError = (status, data) => {
  const providerMessage = data?.error?.message || 'Gemini could not answer right now.';

  if (status === 400 && /contents/i.test(providerMessage)) {
    return 'Gemini rejected the chat history format. Please try the message again.';
  }

  if (status === 400 && /API key/i.test(providerMessage)) {
    return 'Gemini API key is invalid. Please check GEMINI_API_KEY in server/.env.';
  }

  if (status === 403) {
    return 'Gemini API key is not allowed to use this API or model. Check API restrictions and enable the Gemini API in Google AI Studio.';
  }

  if (status === 404) {
    return 'Gemini model was not found. Set GEMINI_MODEL=gemini-2.5-flash in server/.env and restart the server.';
  }

  if (status === 429) {
    return 'Gemini free limit/rate limit reached. Please wait a little and try again.';
  }

  return providerMessage;
};

const chatWithGemini = asyncHandler(async (req, res) => {
  const apiKey = cleanText(process.env.GEMINI_API_KEY, 200);
  const model = cleanText(process.env.GEMINI_MODEL, 80) || DEFAULT_GEMINI_MODEL;
  const message = cleanText(req.body?.message);
  const history = normalizeHistory(req.body?.history);

  if (!message) {
    res.status(400);
    throw new Error('Please type or speak a message first.');
  }

  if (!apiKey || apiKey === 'paste-your-gemini-api-key-here') {
    res.status(503);
    throw new Error('Gemini API key is missing. Paste your key in server/.env as GEMINI_API_KEY, then restart the server.');
  }

  if (typeof fetch !== 'function') {
    res.status(500);
    throw new Error('This server needs Node.js 18+ because Gemini requests use the built-in fetch API.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);

  let geminiResponse;

  try {
    geminiResponse = await fetch(`${GEMINI_API_BASE_URL}/models/${model}:generateContent`, {
      method: 'POST',
      signal: controller.signal,
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
  } catch (error) {
    res.status(error.name === 'AbortError' ? 504 : 502);
    throw new Error(error.name === 'AbortError' ? 'Gemini took too long to respond. Please try again.' : `Could not reach Gemini: ${error.message}`);
  } finally {
    clearTimeout(timeout);
  }

  const data = await readGeminiJson(geminiResponse);

  if (!geminiResponse.ok) {
    console.error('Gemini chat request failed:', {
      status: geminiResponse.status,
      model,
      message: data?.error?.message,
    });
    res.status(geminiResponse.status);
    throw new Error(buildGeminiError(geminiResponse.status, data));
  }

  const reply = getGeminiReplyText(data);

  if (!reply) {
    console.error('Gemini returned an empty chat response:', JSON.stringify(data).slice(0, 1000));
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

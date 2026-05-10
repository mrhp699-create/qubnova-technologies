import { Bot, Loader2, Mic, MicOff, Send, Volume2, X } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { api, getApiErrorMessage } from '../../api/client.js';

const initialMessages = [
  {
    from: 'bot',
    text: 'Hi, I am Nova. Tap the mic or type a message, and I can talk with you about Qubnova projects.',
  },
];

const getSpeechRecognition = () => {
  if (typeof window === 'undefined') return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
};

const speakText = (text) => {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const recognitionRef = useRef(null);

  const SpeechRecognition = useMemo(getSpeechRecognition, []);
  const supportsSpeech = Boolean(SpeechRecognition);

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const send = async (messageText = input) => {
    const trimmedMessage = messageText.trim();
    if (!trimmedMessage || loading) return;

    const nextUserMessage = { from: 'user', text: trimmedMessage };
    const visibleMessages = [...messages, nextUserMessage];

    setMessages(visibleMessages);
    setInput('');
    setLoading(true);

    try {
      const history = messages.slice(-8);
      const { data } = await api.post('/chat', {
        message: trimmedMessage,
        history,
      });

      const botMessage = { from: 'bot', text: data.reply };
      setMessages((items) => [...items, botMessage]);

      if (voiceEnabled) speakText(data.reply);
    } catch (error) {
      const errorMessage = getApiErrorMessage(error, 'Nova could not connect to Gemini. Please check the server key.');
      setMessages((items) => [...items, { from: 'bot', text: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    if (!supportsSpeech || loading || listening) return;

    window.speechSynthesis?.cancel();

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = (event) => {
      setListening(false);
      setMessages((items) => [
        ...items,
        { from: 'bot', text: `Voice input error: ${event.error}. You can still type your message.` },
      ]);
    };
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || '';
      if (transcript) send(transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {open ? (
        <div className="mb-4 w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/15 bg-white shadow-violet dark:bg-aurora-midnight">
          <div className="flex items-center justify-between bg-aurora-linear p-4 text-white">
            <div>
              <div className="flex items-center gap-2 font-bold"><Bot /> Nova Voice Assistant</div>
              <p className="text-xs text-white/80">Powered by your Gemini API key</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot"><X size={18} /></button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.from}-${index}`}
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.from === 'user'
                    ? 'ml-8 bg-aurora-cyan text-aurora-midnight'
                    : 'mr-8 bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white'
                }`}
              >
                {message.text}
              </div>
            ))}
            {loading ? (
              <div className="mr-8 flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600 dark:bg-white/10 dark:text-white">
                <Loader2 className="animate-spin" size={16} /> Nova is thinking...
              </div>
            ) : null}
          </div>

          <div className="space-y-3 border-t border-slate-100 p-3 dark:border-white/10">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && send()}
                placeholder="Ask or use the mic..."
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none focus:border-aurora-cyan dark:border-white/10"
              />
              <button
                onClick={() => send()}
                disabled={loading}
                className="rounded-full bg-aurora-linear p-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-white/60">
              <button
                onClick={listening ? stopListening : startListening}
                disabled={!supportsSpeech || loading}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-3 py-2 font-semibold text-aurora-ink disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:text-white"
              >
                {listening ? <MicOff size={16} /> : <Mic size={16} />}
                {listening ? 'Stop listening' : 'Talk to Nova'}
              </button>
              <button
                onClick={() => setVoiceEnabled((enabled) => !enabled)}
                className={`rounded-full border px-3 py-2 ${voiceEnabled ? 'border-aurora-cyan text-aurora-ink dark:text-white' : 'border-slate-200 dark:border-white/10'}`}
                aria-label="Toggle spoken replies"
              >
                <Volume2 size={16} />
              </button>
            </div>
            {!supportsSpeech ? <p className="text-xs text-amber-600">Voice input needs Chrome or another browser with SpeechRecognition.</p> : null}
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-aurora-linear text-white shadow-violet"
        aria-label="Open chatbot"
      >
        <Bot />
      </button>
    </div>
  );
}

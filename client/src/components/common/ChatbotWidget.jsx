import { Bot, Send, X } from 'lucide-react';
import { useState } from 'react';

const replies = ['Tell us your goal, timeline, and budget. We will suggest the best Qubnova engagement.', 'Our strongest fit is AI SaaS, automation, dashboards, and premium web platforms.', 'You can book a discovery call from the Contact page.'];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi, I am Nova. How can Qubnova help you today?' }]);
  const [input, setInput] = useState('');
  const send = () => {
    if (!input.trim()) return;
    const reply = replies[messages.length % replies.length];
    setMessages((items) => [...items, { from: 'user', text: input }, { from: 'bot', text: reply }]);
    setInput('');
  };
  return (
    <div className="fixed bottom-24 right-6 z-40">
      {open && <div className="mb-4 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/15 bg-white shadow-violet dark:bg-aurora-midnight">
        <div className="flex items-center justify-between bg-aurora-linear p-4 text-white"><div className="flex items-center gap-2 font-bold"><Bot /> Nova Assistant</div><button onClick={() => setOpen(false)}><X size={18} /></button></div>
        <div className="max-h-80 space-y-3 overflow-y-auto p-4">{messages.map((message, index) => <div key={`${message.from}-${index}`} className={`rounded-2xl px-4 py-3 text-sm ${message.from === 'user' ? 'ml-8 bg-aurora-cyan text-aurora-midnight' : 'mr-8 bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white'}`}>{message.text}</div>)}</div>
        <div className="flex gap-2 border-t border-slate-100 p-3 dark:border-white/10"><input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && send()} placeholder="Ask about a project..." className="min-w-0 flex-1 rounded-full border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none focus:border-aurora-cyan dark:border-white/10" /><button onClick={send} className="rounded-full bg-aurora-linear p-2 text-white"><Send size={18} /></button></div>
      </div>}
      <button onClick={() => setOpen((v) => !v)} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-aurora-linear text-white shadow-violet" aria-label="Open chatbot"><Bot /></button>
    </div>
  );
}

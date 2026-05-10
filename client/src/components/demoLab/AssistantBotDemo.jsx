import { useState } from 'react';
import { mockAIResponse } from '../../utils/aiService';

const starterMessages = [
  { role: 'assistant', text: 'Hi! I am a local AI demo bot. Ask me about captions, briefs, quotes, or brand names.' },
];

export default function AssistantBotDemo() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { role: 'user', text },
      { role: 'assistant', text: mockAIResponse(text) },
    ]);
    setInput('');
  };

  return (
    <section className="demo-card assistant-bot-demo">
      <header>
        <p className="eyebrow">AI Demo Lab</p>
        <h2>Assistant Bot</h2>
        <p>Template-based chatbot responses that run locally without paid API keys.</p>
      </header>

      <div className="chat-window" aria-live="polite">
        {messages.map((message, index) => (
          <article className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
            <strong>{message.role === 'user' ? 'You' : 'Qubnova Bot'}</strong>
            <p>{message.text}</p>
          </article>
        ))}
      </div>

      <form className="demo-form" onSubmit={handleSubmit}>
        <label htmlFor="assistant-message">Message</label>
        <div className="inline-controls">
          <input
            id="assistant-message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask for a caption, quote, brief, or brand-name tip"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}

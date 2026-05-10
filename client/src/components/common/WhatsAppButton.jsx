import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return <a aria-label="Chat on WhatsApp" href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-aurora-green text-white shadow-lg transition hover:scale-105"><MessageCircle /></a>;
}

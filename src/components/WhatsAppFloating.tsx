import { site } from '@/lib/site';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_-12px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-14px_rgba(37,211,102,0.9)]"
    >
      <MessageCircle className="h-6 w-6" />
      <span
        aria-hidden
        className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-[#25D366]/30"
      />
    </a>
  );
}

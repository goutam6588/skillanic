'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed  flex flex-col gap-4 z-40">
      {/* Phone Button */}
      <a
        href="tel:+917760003670"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border-2 border-primary text-primary"
        title="Call us"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917760003670"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border-2 border-primary text-primary"
        title="WhatsApp us"
        aria-label="WhatsApp us"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

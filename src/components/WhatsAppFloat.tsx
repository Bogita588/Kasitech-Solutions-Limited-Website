import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/254723799450"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat with Kasitech on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" aria-hidden="true" />
  </a>
);

export default WhatsAppFloat;

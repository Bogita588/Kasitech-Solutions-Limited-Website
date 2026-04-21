import { Mail } from 'lucide-react';
import whatsappIcon from '../assets/whatsapp.png';

export const WhatsAppFloat = () => (
  <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
    <a
      href="https://wa.me/254723799450"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Chat with Kasitech on WhatsApp"
      title="WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
    </a>

    <a
      href="mailto:info@kasitech.co.ke"
      className="flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Email Kasitech"
      title="Email"
    >
      <Mail className="w-12 h-12 text-white" aria-hidden="true" />
    </a>
  </div>
);

export default WhatsAppFloat;

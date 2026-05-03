import { Mail } from 'lucide-react';
import whatsappIcon from '../assets/whatsapp.webp';
import { trackEvent } from '@/hooks/analytics';

export const WhatsAppFloat = () => (
  <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
    
    {/* WhatsApp Button */}
    <a
      href="https://wa.me/254723799450"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent('whatsapp_click', 'contact', 'floating_button')
      }
      className="flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Chat with Kasitech on WhatsApp"
      title="WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
    </a>

    {/* Email Button */}
    <a
      href="mailto:info@kasitech.co.ke"
      onClick={() =>
        trackEvent('email_click', 'contact', 'floating_button')
      }
      className="flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Email Kasitech"
      title="Email"
    >
      <Mail className="w-12 h-12 text-white" aria-hidden="true" />
    </a>

  </div>
);

export default WhatsAppFloat;
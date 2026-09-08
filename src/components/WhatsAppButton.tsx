import whatsappFloatIcon from "../public/whatsapp-float-icon.png";
import { TINTIM_LINK } from "../utils/whatsapp-links";

export default function WhatsAppButton() {
  const whatsappLink = TINTIM_LINK;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 p-1.5 sm:p-2 transition-transform hover:scale-110 animate-bounce [animation-delay:3s]"
    >
      <img
        src={whatsappFloatIcon}
        alt=""
        aria-hidden="true"
        className="h-20 w-20 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
      />
    </a>
  );
}

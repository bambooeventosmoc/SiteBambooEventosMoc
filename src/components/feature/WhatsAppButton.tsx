import whatsappFloatIcon from "../../public/whatsapp-float-icon.png";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/5538999758535`;

  return (
    <a
      href={whatsappUrl}
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
        className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
      />
    </a>
  );
}

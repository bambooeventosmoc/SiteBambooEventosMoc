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
      className="fixed bottom-4 right-4 z-50  p-2  transition-transform hover:scale-110 animate-bounce [animation-delay:3s]"
    >
      <img
        src={whatsappFloatIcon}
        alt=""
        aria-hidden="true"
        className="h-27 w-27 object-contain sm:h-24 sm:w-24"
      />
    </a>
  );
}

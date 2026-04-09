export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/5538999758535`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[1001] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 active:scale-95 active:opacity-90 sm:h-16 sm:w-16"
    >
      <i className="ri-whatsapp-line text-xl md:text-4xl w-4 h-4 flex items-center justify-center"></i>
    </a>
  );
}

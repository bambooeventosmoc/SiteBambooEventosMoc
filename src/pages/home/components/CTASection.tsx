import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();
  const scrollToLocation = () => {
    navigate("/contatos");
    setTimeout(() => {
      const locationSection = document.getElementById("nossa-localizacao");
      if (locationSection) {
        locationSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };
  const phoneNumber = "5538999758535";
  const mensagemWhatsApp = encodeURIComponent(
    "Quero mais informações sobre o Bamboo Eventos",
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${mensagemWhatsApp}`;

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-[#0d3d2f] to-[#1a5a47] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 md:w-32 md:h-32">
          <i className="ri-plant-line text-[60px] md:text-[100px] text-[#d4af37]"></i>
        </div>
        <div className="absolute bottom-10 left-10 w-20 h-20 md:w-32 md:h-32">
          <i className="ri-plant-line text-[60px] md:text-[100px] text-[#d4af37]"></i>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-lg md:text-4xl font-bold mb-4 md:mb-6">
            Pronto Para Criar Seu Evento Perfeito?
          </h2>
          <p className="text-xs md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
            Entre em contato conosco e descubra como podemos transformar sua
            visão em realidade. Nossa equipe está pronta para criar uma
            experiência única e inesquecível.
          </p>
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <button
                onClick={scrollToLocation}
                className="bg-[#d4af37] text-[#0d3d2f] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#c4a137] hover:scale-105 whitespace-nowrap text-xs md:text-base cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="ri-map-pin-line text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Nossa Localização
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] text-[#d4af37] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#d4af37] hover:text-[#0d3d2f] flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-xs md:text-base"
              >
                <i className="ri-whatsapp-line text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Fale no WhatsApp
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <a
                href="https://www.facebook.com/bambooeventos.moc/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] text-[#d4af37] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#d4af37] hover:text-[#0d3d2f] flex items-center justify-center gap-2 text-xs md:text-base whitespace-nowrap cursor-pointer"
              >
                <i className="ri-facebook-fill text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/bambooeventos.moc/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] text-[#d4af37] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#d4af37] hover:text-[#0d3d2f] flex items-center justify-center gap-2 text-xs md:text-base whitespace-nowrap cursor-pointer"
              >
                <i className="ri-instagram-fill text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

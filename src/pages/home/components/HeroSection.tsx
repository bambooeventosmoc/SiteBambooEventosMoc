
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const scrollToLocation = () => {
    window.REACT_APP_NAVIGATE('/contatos');
    setTimeout(() => {
      const locationSection = document.getElementById('nossa-localizacao');
      if (locationSection) {
        locationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d3d2f] to-[#1a5a47]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/4ecf0a06d3ddfe5df2a2535c1efe449a.png"
          alt="Bamboo Eventos"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3d2f]/70 to-[#0d3d2f]/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 relative z-10 w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight">
            Transformamos Momentos em Memórias Inesquecíveis
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-200 mb-5 md:mb-10 leading-relaxed">
            Espaço para festas, confraternizações, eventos sociais e corporativos. Tudo com  excelência, criatividade e dedicação em cada detalhe.
          </p>
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button 
                onClick={scrollToLocation}
                className="bg-[#d4af37] text-[#0d3d2f] px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#c4a137] hover:scale-105 text-xs md:text-base whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="ri-map-pin-line text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Nossa Localização
              </button>
              <a 
                href="https://wa.me/5538977585355" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] text-[#d4af37] px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#d4af37] hover:text-[#0d3d2f] flex items-center justify-center gap-2 text-xs md:text-base whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Fale no WhatsApp
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <a 
                href="https://www.facebook.com/bambooeventos.moc/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] text-[#d4af37] px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#d4af37] hover:text-[#0d3d2f] flex items-center justify-center gap-2 text-xs md:text-base whitespace-nowrap cursor-pointer"
              >
                <i className="ri-facebook-fill text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/bambooeventos.moc/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] text-[#d4af37] px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-center transition-all hover:bg-[#d4af37] hover:text-[#0d3d2f] flex items-center justify-center gap-2 text-xs md:text-base whitespace-nowrap cursor-pointer"
              >
                <i className="ri-instagram-fill text-base md:text-xl w-4 h-4 flex items-center justify-center"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-xl md:text-2xl text-[#d4af37]"></i>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d3d2f] text-white">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/d52b4ba4a12fc6d9511bce3e4066d533.jpeg" 
              alt="Bamboo Eventos" 
              className="h-10 md:h-12 w-auto mb-2 md:mb-3"
            />
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Transformamos seus sonhos em eventos inesquecíveis. Com dedicação e criatividade, criamos experiências únicas que superam expectativas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-[#d4af37] font-semibold text-sm md:text-lg mb-2 md:mb-3">Links Rápidos</h3>
            <ul className="space-y-1 md:space-y-1.5">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#d4af37] transition-colors text-xs md:text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/contatos" className="text-gray-300 hover:text-[#d4af37] transition-colors text-xs md:text-sm">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[#d4af37] font-semibold text-sm md:text-lg mb-2 md:mb-3">Contato</h3>
            <ul className="space-y-2 md:space-y-2">
              <li className="flex items-start gap-2">
                <i className="ri-phone-line text-[#d4af37] mt-1 w-4 h-4 md:w-4 md:h-4 flex items-center justify-center text-sm md:text-sm"></i>
                <span className="text-gray-300 text-xs md:text-sm">(38) 999758535</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-mail-line text-[#d4af37] mt-1 w-4 h-4 md:w-4 md:h-4 flex items-center justify-center text-sm md:text-sm"></i>
                <span className="text-gray-300 text-xs md:text-sm">contato@bambooeventos.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-[#d4af37] mt-1 w-4 h-4 md:w-4 md:h-4 flex items-center justify-center text-sm md:text-sm"></i>
                <span className="text-gray-300 text-xs md:text-sm">Montes Claros, MG</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-gray-700 mt-4 md:mt-6 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-3">
            <p className="text-gray-400 text-xs md:text-sm">
              © {currentYear} Bamboo Eventos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3 md:gap-3">
              <a 
                href="https://www.facebook.com/bambooeventos.moc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-[#1a5a47] rounded-full hover:bg-[#d4af37] transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-base md:text-lg"></i>
              </a>
              <a 
                href="https://www.instagram.com/bambooeventos.moc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-[#1a5a47] rounded-full hover:bg-[#d4af37] transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-base md:text-lg"></i>
              </a>
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d4af37] transition-colors text-xs md:text-sm cursor-pointer whitespace-nowrap"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

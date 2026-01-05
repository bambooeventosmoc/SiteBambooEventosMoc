
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0d3d2f] to-[#1a5a47] text-white">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo Centralizado */}
          <div className="flex justify-center md:justify-start items-center">
            <img 
              src="https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/d52b4ba4a12fc6d9511bce3e4066d533.jpeg" 
              alt="Bamboo Eventos" 
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Links Rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-[#d4af37] font-semibold text-xl md:text-2xl mb-3 md:mb-4">Links Rápidos</h3>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <Link to="/" className="text-gray-200 hover:text-[#d4af37] transition-colors text-base md:text-lg">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/contatos" className="text-gray-200 hover:text-[#d4af37] transition-colors text-base md:text-lg">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-[#d4af37] font-semibold text-xl md:text-2xl mb-3 md:mb-4">Contato</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <i className="ri-phone-line text-[#d4af37] mt-1 w-6 h-6 md:w-6 md:h-6 flex items-center justify-center text-lg md:text-xl"></i>
                <span className="text-gray-200 text-base md:text-lg">(38) 999758535</span>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <i className="ri-mail-line text-[#d4af37] mt-1 w-6 h-6 md:w-6 md:h-6 flex items-center justify-center text-lg md:text-xl"></i>
                <span className="text-gray-200 text-base md:text-lg">bambooeventosmoc@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <i className="ri-map-pin-line text-[#d4af37] mt-1 w-6 h-6 md:w-6 md:h-6 flex items-center justify-center text-lg md:text-xl"></i>
                <span className="text-gray-200 text-base md:text-lg">Montes Claros, MG</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-gray-600 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-base md:text-lg mb-2">
                © {currentYear} Bamboo Eventos. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-base md:text-lg">
                Bamboo Eventos pertence a empresa BRF de Andrade Ltda - Cnpj : 19.224.046.0001-12. Os preços dos serviços  e locações podem variar conforme: Tipo de evento, data do evento, quantidade de participantes  entre outros aspectos
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-3">
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#d4af37] transition-colors text-xs md:text-sm cursor-pointer whitespace-nowrap"
              >
                .
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

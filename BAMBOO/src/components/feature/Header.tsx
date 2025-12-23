import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#0d3d2f] text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/4b9ea135dd76b5e7be43142e98843fe6/d52b4ba4a12fc6d9511bce3e4066d533.jpeg" 
              alt="Bamboo Eventos" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-[#d4af37] whitespace-nowrap ${isActive('/') ? 'text-[#d4af37]' : ''}`}
            >
              Início
            </Link>
            <Link 
              to="/contatos" 
              className={`bg-[#d4af37] text-[#0d3d2f] px-5 py-2 rounded-full font-semibold transition-all hover:bg-[#c4a137] whitespace-nowrap text-sm ${isActive('/contatos') ? 'ring-2 ring-white' : ''}`}
            >
              Contatos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Menu"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-1.5 text-sm font-medium transition-colors hover:text-[#d4af37] ${isActive('/') ? 'text-[#d4af37]' : ''}`}
            >
              Início
            </Link>
            <Link 
              to="/contatos" 
              onClick={() => setIsMenuOpen(false)}
              className={`block bg-[#d4af37] text-[#0d3d2f] px-4 py-1.5 rounded-full font-semibold text-center transition-all hover:bg-[#c4a137] whitespace-nowrap text-sm ${isActive('/contatos') ? 'ring-2 ring-white' : ''}`}
            >
              Contatos
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

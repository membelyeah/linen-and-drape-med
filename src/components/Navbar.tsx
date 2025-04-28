
import { useState } from 'react';
import { Menu, X, Hospital } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Hospital className="h-8 w-8 text-medical-blue" />
            <Link to="/" className="text-xl font-display font-semibold text-gray-900">
              Anugrah Victory <span className="text-medical-blue">Indonesia</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-medical-blue transition-colors">
              Beranda
            </Link>
            <Link to="/products" className="font-medium text-gray-700 hover:text-medical-blue transition-colors">
              Produk
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-medical-blue transition-colors">
              Tentang Kami
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-medical-blue transition-colors">
              Kontak
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-medical-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="pt-4 pb-3 space-y-2 md:hidden">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-light hover:text-medical-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-light hover:text-medical-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-light hover:text-medical-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-light hover:text-medical-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

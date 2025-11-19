import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-forest/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="/SHKL footing header2.png"
              alt="SHKL"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              SHOP
            </a>
            <a href="#skincare" className="text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              SKINCARE
            </a>
            <a href="#haircare" className="text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              HAIRCARE
            </a>
            <a href="#about" className="text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
            <button className="text-cream hover:text-gold transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          <button
            className="md:hidden text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-forest/20">
          <div className="px-6 py-4 space-y-4">
            <a href="#shop" className="block text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              SHOP
            </a>
            <a href="#skincare" className="block text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              SKINCARE
            </a>
            <a href="#haircare" className="block text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              HAIRCARE
            </a>
            <a href="#about" className="block text-cream hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

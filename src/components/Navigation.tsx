import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-cream-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 h-20 flex items-center">
            <img
              src="/SHKL 3.1.png"
              alt="SHKL"
              className="h-16 w-auto object-cover object-bottom"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SHOP
            </a>
            <a href="#skincare" className="text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SKINCARE
            </a>
            <a href="#haircare" className="text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              HAIRCARE
            </a>
            <a href="#about" className="text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
            <button className="text-cream-200 hover:text-bronze-400 transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          <button
            className="md:hidden text-cream-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-cream-900/10">
          <div className="px-6 py-4 space-y-4">
            <a href="#shop" className="block text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SHOP
            </a>
            <a href="#skincare" className="block text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SKINCARE
            </a>
            <a href="#haircare" className="block text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              HAIRCARE
            </a>
            <a href="#about" className="block text-cream-200 hover:text-bronze-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

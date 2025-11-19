import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="bg-black/30 backdrop-blur-md border border-cream/10 rounded-full px-6 lg:px-8 shadow-xl">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/SHKL footing header2.png"
              alt="SHKL"
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider">
              SHOP
            </Link>
            <Link to="/skincare" className="text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider">
              SKINCARE
            </Link>
            <Link to="/haircare" className="text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider">
              HAIRCARE
            </Link>
            <a href="/#about" className="text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
            <button className="text-cream hover:text-forest-light transition-colors duration-300">
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
        <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-cream/10 rounded-b-3xl mt-2">
          <div className="px-6 py-4 space-y-4">
            <Link to="/shop" className="block text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider" onClick={() => setIsMenuOpen(false)}>
              SHOP
            </Link>
            <Link to="/skincare" className="block text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider" onClick={() => setIsMenuOpen(false)}>
              SKINCARE
            </Link>
            <Link to="/haircare" className="block text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider" onClick={() => setIsMenuOpen(false)}>
              HAIRCARE
            </Link>
            <a href="/#about" className="block text-cream hover:text-forest-light transition-colors duration-300 text-sm font-medium tracking-wider" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

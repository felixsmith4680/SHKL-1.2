import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cream-900/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/SHKL 3.1.png"
              alt="SHKL"
              className="h-12 w-auto mb-4"
            />
            <p className="text-cream-400 text-sm leading-relaxed">
              Modern excellence. Natural science. Uncompromising quality.
            </p>
          </div>

          <div>
            <h3 className="text-[#FAF6F0] font-bold tracking-wider mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li><a href="#skincare" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">Skincare</a></li>
              <li><a href="#haircare" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">Haircare</a></li>
              <li><a href="#essentials" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">Essentials</a></li>
              <li><a href="#bestsellers" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">Bestsellers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FAF6F0] font-bold tracking-wider mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">Contact Us</a></li>
              <li><a href="#shipping" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">Shipping Info</a></li>
              <li><a href="#returns" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">Returns</a></li>
              <li><a href="#faq" className="text-cream-400 hover:text-bronze-400 text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FAF6F0] font-bold tracking-wider mb-4">CONNECT</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-cream-400 hover:text-bronze-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-400 hover:text-bronze-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-400 hover:text-bronze-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-cream-400 text-sm">
              Follow us for daily beauty inspiration
            </p>
          </div>
        </div>

        <div className="border-t border-cream-900/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-500 text-sm">
            © 2024 SHKL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-cream-500 hover:text-bronze-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-cream-500 hover:text-bronze-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

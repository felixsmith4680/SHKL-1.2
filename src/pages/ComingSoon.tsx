import { Sparkles, Flame } from 'lucide-react';

interface ComingSoonProps {
  type: 'haircare' | 'essentials';
}

export default function ComingSoon({ type }: ComingSoonProps) {
  const config = {
    haircare: {
      icon: Sparkles,
      title: 'HAIRCARE COLLECTION',
      description: 'Premium hair care products infused with Lebanese botanical traditions',
    },
    essentials: {
      icon: Flame,
      title: 'ESSENTIALS COLLECTION',
      description: 'Daily essentials designed for everyone who demands excellence',
    },
  };

  const { icon: Icon, title, description } = config[type];

  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center mb-8">
          <div className="p-6 bg-gold/20 rounded-full">
            <Icon className="w-16 h-16 text-gold" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-cream mb-6 tracking-tight">
          {title}
        </h1>

        <div className="w-24 h-1 bg-forest mx-auto mb-8"></div>

        <p className="text-cream-300 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        <div className="bg-gradient-to-br from-charcoal/30 to-transparent border border-gold/30 rounded-3xl p-12 mb-8">
          <div className="text-forest-light text-7xl font-bold mb-4">
            COMING SOON
          </div>
          <p className="text-cream-300 text-lg leading-relaxed">
            We're crafting something extraordinary. Our {type === 'haircare' ? 'haircare' : 'essential'} products are being perfected to meet our uncompromising standards of quality and effectiveness.
          </p>
        </div>

        <div className="space-y-4 text-cream-300 mb-8">
          <p className="text-lg">Be the first to know when we launch</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-charcoal/50 border border-nature/30 text-cream px-6 py-4 rounded-full focus:outline-none focus:border-forest transition-colors duration-300 placeholder-cream-500"
            />
            <button
              type="submit"
              className="bg-forest hover:bg-forest-light text-cream px-8 py-4 rounded-full font-semibold tracking-wider transition-all duration-300"
            >
              NOTIFY ME
            </button>
          </form>
        </div>

        <a
          href="/"
          className="inline-block text-forest-light hover:text-forest transition-colors duration-300 text-sm font-semibold tracking-wider"
        >
          ← BACK TO HOME
        </a>
      </div>
    </div>
  );
}

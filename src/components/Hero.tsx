import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <div className="mb-8">
          <img
            src="/SHKL 3.2.png"
            alt="SHKL Logo"
            className="w-full max-w-3xl mx-auto mb-6 animate-fade-in"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FAF6F0] mb-6 tracking-tight leading-tight">
          CRAFT YOUR
          <span className="block text-bronze-400 mt-2">BEST SELF</span>
        </h1>

        <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Modern excellence meets natural science. Premium skincare, haircare, and essentials for everyone who demands the best.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-bronze-500 hover:bg-bronze-600 text-black px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center gap-2">
            SHOP NOW
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-cream-300 text-[#FAF6F0] hover:bg-cream-100 hover:text-black px-8 py-4 font-semibold tracking-wider transition-all duration-300">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-cream-950/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FAF6F0] mb-6 tracking-tight">
          JOIN THE MOVEMENT
        </h2>

        <p className="text-cream-300 text-lg mb-10 leading-relaxed">
          Subscribe to receive exclusive launches, beauty insights, and special offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-cream-900/10 border border-cream-700/30 text-[#FAF6F0] px-6 py-4 focus:outline-none focus:border-bronze-500 transition-colors duration-300 placeholder-cream-500"
          />
          <button
            type="submit"
            className="bg-bronze-500 hover:bg-bronze-600 text-black px-8 py-4 font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            SUBSCRIBE
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-cream-500 text-sm mt-6">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}

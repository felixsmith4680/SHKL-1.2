import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-cream-950/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 tracking-tight">
          JOIN THE MOVEMENT
        </h2>

        <p className="text-cream-300 text-lg mb-10 leading-relaxed">
          Subscribe to receive exclusive launches, beauty insights, and special offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-charcoal/50 border border-nature/30 text-cream px-6 py-4 rounded-full focus:outline-none focus:border-forest transition-colors duration-300 placeholder-cream-500"
          />
          <button
            type="submit"
            className="bg-forest hover:bg-forest-light text-cream px-8 py-4 rounded-full font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
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

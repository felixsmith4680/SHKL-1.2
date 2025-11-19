import { ArrowRight, Star } from 'lucide-react';

export default function BestSeller() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-cream-950/5 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            BEST SELLER
          </h2>
          <div className="w-24 h-1 bg-forest mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-charcoal/30 to-transparent border border-gold/30 rounded-3xl p-8 lg:p-12 hover:border-forest/50 transition-all duration-500">
            <div className="aspect-square bg-cream/5 rounded-2xl flex items-center justify-center border border-gold/20">
              <div className="text-center">
                <div className="text-cream-500 text-sm mb-2">PRODUCT IMAGE</div>
                <div className="text-cream text-6xl font-bold">SHKL</div>
                <div className="text-forest-light text-xl mt-2">Night Cream</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gold">
                <Star className="w-5 h-5 fill-gold" />
                <Star className="w-5 h-5 fill-gold" />
                <Star className="w-5 h-5 fill-gold" />
                <Star className="w-5 h-5 fill-gold" />
                <Star className="w-5 h-5 fill-gold" />
                <span className="text-cream-300 text-sm ml-2">(127 reviews)</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-cream tracking-tight">
                SHKL Night Cream
              </h3>

              <p className="text-cream-300 text-lg leading-relaxed">
                Transform your skin overnight with our signature night cream. Formulated with all-natural ingredients and cutting-edge science to deeply nourish, repair, and rejuvenate while you sleep.
              </p>

              <div className="space-y-3 text-cream-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-forest-light rounded-full mt-2"></div>
                  <span>Deeply hydrates and nourishes all skin types</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-forest-light rounded-full mt-2"></div>
                  <span>Reduces fine lines and improves skin texture</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-forest-light rounded-full mt-2"></div>
                  <span>100% natural ingredients, dermatologically tested</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4 pt-4">
                <span className="text-4xl font-bold text-forest-light">$49.99</span>
                <span className="text-cream-500 line-through text-xl">$69.99</span>
              </div>

              <button className="group bg-forest hover:bg-forest-light text-cream px-8 py-4 rounded-full font-semibold tracking-wider transition-all duration-300 flex items-center gap-2">
                ADD TO CART
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

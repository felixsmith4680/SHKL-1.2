import { ArrowRight, Star } from 'lucide-react';

export default function Shop() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4 tracking-tight">
            SHOP ALL PRODUCTS
          </h1>
          <div className="w-24 h-1 bg-forest mx-auto mb-6"></div>
          <p className="text-cream-300 text-lg max-w-2xl mx-auto">
            Discover our collection of premium, all-natural skincare products
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-charcoal/30 to-transparent border border-gold/30 rounded-3xl p-8 hover:border-forest/50 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-cream/5 rounded-2xl flex items-center justify-center border border-gold/20">
                <div className="text-center">
                  <div className="text-cream-500 text-sm mb-2">PRODUCT IMAGE</div>
                  <div className="text-cream text-6xl font-bold">SHKL</div>
                  <div className="text-forest-light text-xl mt-2">Night Cream</div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-gold mb-4">
                    <Star className="w-5 h-5 fill-gold" />
                    <Star className="w-5 h-5 fill-gold" />
                    <Star className="w-5 h-5 fill-gold" />
                    <Star className="w-5 h-5 fill-gold" />
                    <Star className="w-5 h-5 fill-gold" />
                    <span className="text-cream-300 text-sm ml-2">(127 reviews)</span>
                  </div>

                  <h2 className="text-3xl font-bold text-cream mb-3 tracking-tight">
                    SHKL Night Cream
                  </h2>

                  <p className="text-cream-300 leading-relaxed mb-4">
                    Transform your skin overnight with our signature night cream. Deeply nourishes and repairs while you sleep.
                  </p>

                  <div className="space-y-2 text-cream-300 text-sm mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-forest-light rounded-full mt-2"></div>
                      <span>All skin types</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-forest-light rounded-full mt-2"></div>
                      <span>100% natural ingredients</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-forest-light rounded-full mt-2"></div>
                      <span>Dermatologically tested</span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-bold text-forest-light">$49.99</span>
                    <span className="text-cream-500 line-through text-lg">$69.99</span>
                  </div>
                </div>

                <button className="group bg-forest hover:bg-forest-light text-cream px-6 py-3 rounded-full font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
                  ADD TO CART
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

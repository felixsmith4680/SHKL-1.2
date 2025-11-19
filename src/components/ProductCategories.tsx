import { Sparkles, Droplets, Flame } from 'lucide-react';

const categories = [
  {
    icon: Droplets,
    title: 'SKINCARE',
    description: 'Nourish and rejuvenate with our premium formulations for all skin types',
    link: '#skincare'
  },
  {
    icon: Sparkles,
    title: 'HAIRCARE',
    description: 'Transform your hair with natural botanicals and innovation',
    link: '#haircare'
  },
  {
    icon: Flame,
    title: 'ESSENTIALS',
    description: 'Elevate your routine with targeted products for everyone',
    link: '#essentials'
  }
];

export default function ProductCategories() {
  return (
    <section id="shop" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FAF6F0] mb-4 tracking-tight">
            OUR COLLECTIONS
          </h2>
          <div className="w-24 h-1 bg-bronze-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.link}
              className="group relative bg-gradient-to-b from-cream-900/5 to-transparent border border-cream-800/20 hover:border-bronze-500/50 p-8 transition-all duration-500 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-bronze-500/10 rounded-full group-hover:bg-bronze-500/20 transition-colors duration-300">
                  <category.icon className="w-12 h-12 text-bronze-400" />
                </div>

                <h3 className="text-2xl font-bold text-[#FAF6F0] mb-3 tracking-wider">
                  {category.title}
                </h3>

                <p className="text-cream-300 leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-6 text-bronze-400 text-sm font-semibold tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                  EXPLORE →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Leaf, Beaker, Heart, Zap, Globe, Award } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'We source premium natural ingredients that work in harmony with your skin and hair, free from harsh chemicals.'
  },
  {
    icon: Beaker,
    title: 'Science-Backed Formulations',
    description: 'Every product is developed using cutting-edge scientific research to deliver proven, measurable results.'
  },
  {
    icon: Heart,
    title: 'For Everyone',
    description: 'Our products are crafted for all skin types, hair types, and genders. Beauty has no boundaries.'
  },
  {
    icon: Zap,
    title: 'Visible Results',
    description: 'Experience noticeable improvements in days, not weeks. Our formulations deliver real, lasting transformation.'
  },
  {
    icon: Globe,
    title: 'Sustainably Made',
    description: 'We are committed to ethical sourcing and environmentally responsible manufacturing practices.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Rigorous testing and quality control ensure every product meets our uncompromising standards.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FAF6F0] mb-4 tracking-tight">
            WHY CHOOSE SHKL
          </h2>
          <p className="text-cream-300 text-lg max-w-2xl mx-auto">
            We combine nature's best ingredients with scientific innovation to create products that truly transform.
          </p>
          <div className="w-24 h-1 bg-bronze-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-gradient-to-b from-cream-900/5 to-transparent border border-cream-800/20 hover:border-bronze-500/50 p-8 transition-all duration-500 hover:translate-y-[-4px]"
            >
              <div className="mb-6 p-4 bg-bronze-500/10 w-fit rounded-full group-hover:bg-bronze-500/20 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-bronze-400" />
              </div>
              <h3 className="text-xl font-bold text-[#FAF6F0] mb-3 tracking-wider">
                {reason.title}
              </h3>
              <p className="text-cream-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

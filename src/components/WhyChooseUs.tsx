import { Leaf, Beaker, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'ALL-NATURAL INGREDIENTS',
    description: 'We carefully select only the finest natural ingredients, sourced sustainably to ensure purity and effectiveness in every product.'
  },
  {
    icon: Beaker,
    title: 'SCIENTIFICALLY BACKED',
    description: 'Every formulation is rigorously tested and backed by scientific research to deliver real, measurable results you can see and feel.'
  },
  {
    icon: Award,
    title: 'PREMIUM QUALITY',
    description: 'We never compromise on quality. Each product undergoes strict quality control to meet our exceptional standards of excellence.'
  },
  {
    icon: Heart,
    title: 'FOR EVERYONE',
    description: 'Designed for all skin and hair types. Our inclusive approach means everyone can experience the transformative power of SHKL.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-cream-950/5 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-cream mb-4 tracking-tight">
            WHY CHOOSE SHKL
          </h2>
          <div className="w-24 h-1 bg-forest mx-auto mb-6"></div>
          <p className="text-cream-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At SHKL, we believe beauty should be natural, effective, and accessible to everyone. Our commitment to excellence drives everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-br from-charcoal/30 to-transparent border border-gold/30 p-8 hover:border-forest/50 transition-all duration-500 rounded-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-3 bg-gold/20 rounded-full">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cream mb-3 tracking-wider">
                    {feature.title}
                  </h3>
                  <p className="text-cream-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-cream mb-4 tracking-tight">
            OUR COMMITMENT TO YOU
          </h3>
          <p className="text-cream-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Every SHKL product is formulated with nature's most powerful ingredients, enhanced by cutting-edge science. We test extensively to ensure our products deliver the transformative results you deserve. When you choose SHKL, you're choosing products that work as hard as you do.
          </p>
        </div>
      </div>
    </section>
  );
}

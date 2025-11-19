import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import Philosophy from '../components/Philosophy';
import BestSeller from '../components/BestSeller';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <Philosophy />
      <BestSeller />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}

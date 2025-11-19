import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ProductCategories from './components/ProductCategories';
import Philosophy from './components/Philosophy';
import WhyChooseUs from './components/WhyChooseUs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <ProductCategories />
      <Philosophy />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

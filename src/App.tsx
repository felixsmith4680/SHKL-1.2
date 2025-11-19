import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Skincare from './pages/Skincare';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/haircare" element={<ComingSoon type="haircare" />} />
          <Route path="/essentials" element={<ComingSoon type="essentials" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

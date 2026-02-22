import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Testimonials from './pages/Testimonials';
import Customize from './pages/Customize';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/customize/:id" element={<Customize />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;

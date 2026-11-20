
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/products" element={<ProductsPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route
            path="/services/:slug"
            element={<ServiceDetailsPage />}
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

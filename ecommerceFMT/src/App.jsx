import { Routes, Route } from 'react-router-dom';
import { ContactPage } from '../src/pages/ContactPage';
import { CartPage } from '../src/pages/CartPage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { Header } from './components/Header';
import { Homepage } from './pages/Homepage';
import { Footer } from './components/Footer';
import { ProductPage } from './pages/ProductPage/Product.page';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;

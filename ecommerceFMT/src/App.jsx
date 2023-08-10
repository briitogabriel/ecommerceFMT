import { Routes, Route } from 'react-router-dom';
import { ContactPage } from '../src/pages/ContactPage';
import { CartPage } from '../src/pages/CartPage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { Header } from './components/Header';
import { Homepage } from './pages/Homepage';
import { Footer } from './components/Footer';
import Search from "./components/Search/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductPage } from './pages/ProductPage/Product.page';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;

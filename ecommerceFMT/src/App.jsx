import { Routes, Route } from 'react-router-dom';
import { ContactPage } from '../src/pages/ContactPage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { Header } from './components/Header';
import { Homepage } from './pages/Homepage';
import { Footer } from './components/Footer';
import Search from "./components/Search/Search";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/produtos" element={<ProductsPage />} /> */}
        {/* <Route path="/carrinho" element={<ShoppingCartPage />} /> */}
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;

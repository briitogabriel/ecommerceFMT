import { Routes, Route } from 'react-router-dom';
import ContactPage from '../src/pages/ContactPage/ContactPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/produtos" element={<ProductsPage />} /> */}
          {/* <Route path="/carrinho" element={<ShoppingCartPage />} /> */}
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  );
}

export default App;

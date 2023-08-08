import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from '../src/pages/ContactPage/ContactPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/produtos" element={<ProductsPage />} /> */}
          {/* <Route path="/carrinho" element={<ShoppingCartPage />} /> */}
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

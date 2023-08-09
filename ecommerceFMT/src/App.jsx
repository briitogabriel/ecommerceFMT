import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/produtos" element={<ProductsPage />} /> */}
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

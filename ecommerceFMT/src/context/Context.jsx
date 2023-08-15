import { createContext, useContext, useEffect, useState } from 'react';
import data from '../assets/mock.json';
import bannerImage from './../assets/banner.json';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [banner, setBanner] = useState(bannerImage);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const totalCart = () => {
    const total = cart.reduce((prev, item) => {
      return prev + item.preco * item.quantidade;
    }, 0);
    setTotal(total);
  };

  const addProductToCart = (id) => {
    const checkItem = cart.every((item) => item.id !== id);
    if (checkItem) {
      const item = products.filter((product) => product.id === id);
      const novoItem = { ...item[0] };
      setCart([...cart, novoItem]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    }
  };

  useEffect(() => {
    totalCart();
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        banner,
        addProductToCart,
        cart,
        setCart,
        totalCart,
        total,
        setTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

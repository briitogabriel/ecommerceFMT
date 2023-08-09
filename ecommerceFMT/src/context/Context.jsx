import { createContext, useContext, useState } from 'react';
import data from '../assets/mock.json'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <AppContext.Provider value={{products}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
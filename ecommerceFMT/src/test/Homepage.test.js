import React from 'react';
import { render } from '@testing-library/react';

// Página a ser testada:
import { Homepage } from '../pages/Homepage/Homepage';

// Criando um contexto "virtual" para os testes:
import { AppContext } from '../context/Context';
const AppContextValue = {
  products: [],
  cart: [],
  total: 0
};

test('renders homepage', () => {
  render(<AppContext.Provider value={AppContextValue}><Homepage /></AppContext.Provider>);
  });
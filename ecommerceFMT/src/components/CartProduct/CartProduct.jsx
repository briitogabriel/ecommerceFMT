import './CartProduct.css';
import { useAppContext } from '../../context/Context';

import { AiOutlineDelete } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { formatCurrency } from './../../utils/formatCurrency';

const CartProduct = ({ product }) => {
  const { cart, setCart } = useAppContext();

  const changeAmount = (type, id) => {
    switch (type) {
      case 'minus':
        setCart(
          cart.map((item) =>
            item.id === id
              ? item.quantidade > 1
                ? { ...item, quantidade: item.quantidade - 1 }
                : item
              : item
          )
        );
        break;

      case 'plus':
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
          )
        );
        break;

      case 'delete':
        setCart(cart.filter((item) => item.id !== id));
        break;
    }
  };

  return (
    <div className="card m-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.imagem}
            className="img-fluid rounded-start"
            alt={product.nome}
          />
        </div>
        <div className="col-md-8 d-flex flex-wrap justify-content-evenly">
          <div className="card-body">
            <h5 className="card-title">{product.nome}</h5>
            <div
              className="d-flex flex-wrap justify-content-evenly align-items-center"
              style={{ minWidth: '150px' }}
            >
              <button
                className="btn-qtd"
                onClick={() => changeAmount('minus', product.id)}
              >
                <BiMinus />
              </button>
              <h5 className="card-title mx-2 my-0">{product.quantidade}</h5>
              <button
                className="btn-qtd"
                onClick={() => changeAmount('plus', product.id)}
              >
                <BiPlus />
              </button>
            </div>
            <p className="card-text">{formatCurrency(product.preco)}</p>
          </div>
          <AiOutlineDelete
            className="m-3"
            style={{ cursor: 'pointer', color: 'red' }}
            onClick={() => changeAmount('delete', product.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

import { useAppContext } from '../../context/Context'
import CartProduct from '../../components/CartProduct/CartProduct';
import TotalCart from '../../components/TotalCart/TotalCart';

import { LinkContainer } from 'react-router-bootstrap';

export const CartPage = () => {
  const { cart, total } = useAppContext()

  return (
    <div className='container justify-content-center'>
      <div className='d-flex container justify-content-center' style={{minHeight: '30vh'}}>
        <div className='flex-column'>
          {
            cart.length > 0 ? cart.map((product, index) => (
              <CartProduct product={product} key={index}/>
            ))
            :
            <>
              <div className='mt-5 mb-4 text-center'>Carrinho vazio!</div>
              <LinkContainer to="/">
                <button className="btn btn-primary w-80 mb-3">Continuar Comprando</button>
              </LinkContainer>
            </>
          }
        </div>
        {cart.length > 0 && <TotalCart total={total} />}
      </div>
    </div>
  )
}
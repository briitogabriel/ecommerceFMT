import { useAppContext } from '../../context/Context'
import CartProduct from '../../components/CartProduct/CartProduct';
import TotalCart from '../../components/TotalCart/TotalCart';

export const CartPage = () => {
  const { cart, total } = useAppContext()

  return (
    <div className='container'>
      <div className='d-flex justify-content-end'>
        <div className='flex-column'>
          {cart.map((product, index) => (
            <CartProduct product={product} key={index}/>
          ))}
        </div>
        <TotalCart total={total} />
      </div>
    </div>
  )
}
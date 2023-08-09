import productsMockup from '../../assets/mock.json'
import CartProduct from '../../components/CartProduct/CartProduct';

const CartPage = () => {

  return (
    <div>
      <div>NAVBAR COMPONENT</div>

      {productsMockup.map((product, index) => (
        <CartProduct product={product} key={index}/>
      ))}
      
    </div>
  )
}

export default CartPage;
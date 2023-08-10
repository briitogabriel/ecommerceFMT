import './CartProduct.css'

const CartProduct = ({product}) => {

  return (
    <div className="card m-4" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.imagem} className="img-fluid rounded-start" alt={product.nome} />
        </div>
        <div className="col-md-8 d-flex flex-wrap justify-content-evenly">
          <div className="card-body">
            <h5 className="card-title">{product.nome}</h5>
            <div className="d-flex flex-wrap justify-content-evenly align-items-center" style={{ minWidth: '150px' }}>
              <button className="btn-qtd">-</button>
              <h5 className="card-title m-0">{product.quantidade}</h5>
              <button className="btn-qtd">+</button>
            </div>
            <p className="card-text">R$ {product.preco.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct;
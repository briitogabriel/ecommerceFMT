

const CartProduct = ({product}) => {

  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.imagem} className="img-fluid rounded-start" alt={product.nome} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.nome}</h5>
            <p className="card-text">{product.preco}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct;
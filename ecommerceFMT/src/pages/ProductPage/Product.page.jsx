import {useParams} from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import {Button, Card} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './ProductPage.style.css';
import {BiArrowBack} from 'react-icons/bi'

export const ProductPage = () => {
    const {id} = useParams();
    const { addProductToCart, products } = useAppContext();

    const productId = Number(id);

    const product = products.filter(product => product.id === productId)
    
    const path = `http://${window.location.host}`

    return (
        <div className="product p-4 text-center" style={{height: "45vh"}}>
            <Card className="m-auto" style={{width: "80%"}}>
                <div className="row g-0">
                    <div className="col-md-4 m-auto d-flex justify-content-center">
                    <img src={`${path}/${product[0].imagem}`} className="img-fluid rounded-start" alt={product.nome} />
                    </div>
                    <div className="col-md-8 d-flex flex-wrap justify-content-evenly">
                    <Card.Body className='m-auto'>
                    <Card.Title>{product[0].nome}</Card.Title>
                        <Card.Text className='text-center'>{product[0].descricao}</Card.Text>
                        <Card.Text>{product[0].preco}</Card.Text>
                        <Button variant="primary" onClick={() => addProductToCart(product[0].id) }>Adicionar ao carrinho</Button>
                    </Card.Body>
                    </div>
                </div>
                </Card>
                <LinkContainer to="/">
                <div className='mt-1'>
                    <a className='return-home'><BiArrowBack/> Voltar para página inicial</a>
                </div>
                </LinkContainer>
        </div>

        
    )
}
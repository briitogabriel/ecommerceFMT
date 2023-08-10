import {useParams} from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import {Button, Card} from 'react-bootstrap';
import './ProductPage.style.css';

export const ProductPage = () => {
    const {id} = useParams();
    const { addProductToCart, products } = useAppContext();

    const productId = Number(id);

    const product = products.filter(product => product.id === productId)
    console.log(product)
    return (
        <div className='container p-5'>
            <Card className='m-auto p-3' style={{ width: '60%' }}>
                <Card.Img src={product[0].imagem} />
                <Card.Body className='m-auto' >
                    <Card.Title>{product[0].nome}</Card.Title>
                    <Card.Text className='text-center'>{product[0].descricao}</Card.Text>
                    <Card.Text>{product[0].preco}</Card.Text>
                    <Button variant="primary" onClick={() => addProductToCart(product[0].id) }>Adicionar ao carrinho</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
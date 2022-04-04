import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle,
            CardText, Button} from 'reactstrap';
import './Product.css'

function Product( {addItem, removeItem} ) {
    const {id} = useParams();
    const allProducts = useSelector(state => state.inventory, shallowEqual);

    const product = allProducts[`${id}`]
    
    if (!product) {
        return (
        <div>
            <p>Ooops...can't find a product with id {id}.</p>
            <Button >
                <Link className='Product-homeBtn' to='/'>Home</Link>   
            </Button>
        </div>
        )
    }

    const add = (evt) => {
        evt.preventDefault();
        addItem(product, 1);
    }

    const remove = (evt) => {
        evt.preventDefault();
        removeItem(product);
    }

    return (
        <div>
            <Card className="Product-card">
                <CardImg className='Product-img'
                    alt="product image"
                    src={product.image_url}
                    top
                />
                <CardBody>
                    <CardTitle tag="h4" className="text-dark">
                        {product.name}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        ${product.price}
                    </CardSubtitle>
                    <CardText className="text-dark" tag="p">
                        {product.description}
                    </CardText>
                    <Button className='Product-addBtn btn-sm' onClick={add}>
                        Add to Cart
                    </Button>
                    <Button className='Product-removeBtn btn-sm' onClick={remove}>
                        Remove from Cart
                    </Button>
                </CardBody>
            </Card>
            <p></p>
            <Button>
                <Link className='Product-homeBtn' to='/'>Home</Link>   
            </Button>
        </div>
    )
}

export default Product;
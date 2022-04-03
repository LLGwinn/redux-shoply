import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle,
            CardText, Button} from 'reactstrap';
import './Product.css'

function Product( {product, addItem, removeItem} ) {
    const dispatch = useDispatch();

    const add = (evt) => {
        evt.preventDefault();
        addItem(product);
    }

    const remove = (evt) => {
        evt.preventDefault();
        removeItem(product);
    }

    return (
        <Card className="Product-card">
            <CardImg className='Product-img'
                alt="product image"
                src={product[1].image_url}
                top
            />
            <CardBody>
                <CardTitle tag="h4" className="text-dark">
                    {product[1].name}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    ${product[1].price}
                </CardSubtitle>
                <CardText className="text-dark" tag="p">
                    {product[1].description}
                </CardText>
                <Button className='Product-addBtn btn-sm' onClick={add}>
                    Add to Cart
                </Button>
                <Button className='Product-removeBtn btn-sm' onClick={remove}>
                    Remove from Cart
                </Button>
            </CardBody>
        </Card>
    )
}

export default Product;
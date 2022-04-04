import React from 'react';
import { Link } from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import './ProductList.css';
import {Button, Table} from 'reactstrap';

function ProductList( {addItem, removeItem}) {
    const allProducts = useSelector(state => state.inventory, shallowEqual);
    const productArray = Object.entries(allProducts);
    const currentCart = useSelector(state => state.cart);

    const getCartTotal = () => {
        let totalCart = 0;
        for (let item of currentCart) {
            let itemPrice = item[1].price;
            if (item[1].qty) {
                itemPrice = item[1].price * item[1].qty;
            }
            totalCart += itemPrice;
        }
        return totalCart;
    }

    return (
        <div className='ProductList'>
            <h2>All the Products!</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productArray.map(product =>
                        <tr key={product[0]} id='product-row' data-product={product}>
                            <td className='text-start'>
                                <Link to={`products/${product[0]}`}>{product[1].name}</Link>
                            </td>
                            <td className='text-end'>${product[1].price}</td>
                            <td>
                                <Button className='ProductList-add btn-sm'
                                        onClick={() => addItem(product, 1)}>
                                    Add to Cart
                                </Button>
                            </td>
                            <td>
                                <Button className='ProductList-remove btn-sm'
                                        onClick={() => removeItem(product)}>
                                    Remove from Cart
                                </Button>
                            </td>
                        </tr>
                    )} 
                </tbody>
            </Table>
            <h2>Your cart total: ${getCartTotal()}
            <span className='fs-6'><Link to='/cart'>&nbsp;&nbsp;&nbsp;&nbsp;(see cart)</Link></span>
            </h2>
        </div>
    )
}

export default ProductList;


import React from 'react';
import {useSelector} from 'react-redux';
import {Table, Button} from 'reactstrap';
import './Cart.css'

function Cart( {addItem} ) {
    const currCart = useSelector(state => state.cart);
    currCart.sort();
    
    const itemTotal = (price, qty) => {
        return (price * qty).toFixed(2);
    }

    const getCartTotal = () => {
        let totalCart = 0;
        for (let item of currCart) {
            let itemPrice = item[1].price;
            if (item[1].qty) {
                itemPrice = item[1].price * item[1].qty;
            } else {
                itemPrice = 0;
            }
            totalCart += itemPrice;
        }
        return totalCart;
    }

    return (
        <div className='Cart'>
        <h2>Shopping Cart</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th>Each</th>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currCart.map(product => {
                        return <tr key={product[0]} id='product-row'>
                                    <td>{product[1].qty}</td>
                                    <td className='text-start'>{product[1].name}</td>
                                    <td className='text-end'>${(product[1].price).toFixed(2)}</td>
                                    <td className='text-end'>{itemTotal(product[1].price, product[1].qty)}</td>
                                    <td>
                                        <Button className='ProductList-add btn-sm'
                                                onClick={() => addItem(product, 1)}>
                                            +
                                        </Button>
                                    </td>
                                    <td>
                                        <Button className='ProductList-remove btn-sm'
                                                onClick={() => addItem(product, -1)}>
                                            -
                                        </Button>
                                    </td>
                                </tr>
                        }
                    )} 
                </tbody>
            </Table>
            <h3> Total Cart: ${getCartTotal()}</h3>
        </div>
    )
}

export default Cart;
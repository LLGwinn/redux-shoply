import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';
import NotFound from './NotFound';
import Cart from './Cart';

function AppRoutes( {addItem, removeItem} ) {
    return (
        <Routes>
            <Route path='/'
                   element={<ProductList addItem={addItem} removeItem={removeItem} />}
            />
            <Route path='/products/:id' 
                   element={<Product addItem={addItem} removeItem={removeItem}/>} />
            <Route path='/cart'
                   element={<Cart addItem={addItem} removeItem={removeItem}/>} />
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
        
    )
}

export default AppRoutes;
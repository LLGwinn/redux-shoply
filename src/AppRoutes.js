import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';

function AppRoutes( {addItem, removeItem} ) {
    return (
        <Routes>
            <Route path='/'
                   element={<ProductList addItem={addItem} removeItem={removeItem} />}
            />
            <Route path='/products/:id' 
                   element={<Product addItem={addItem} removeItem={removeItem}/>} />
        </Routes>
        
    )
}

export default AppRoutes;
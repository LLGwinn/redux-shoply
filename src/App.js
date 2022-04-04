import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart, removeFromCart, updateItemQty } from './actions';
import AppRoutes from './AppRoutes';

function App() {
  const dispatch = useDispatch();
  const currCart = useSelector(state => state.cart);

  const addItem = (product, qty) => {
    const productId = product[0];
    // check to see if item is already in cart.
    const existingProduct = currCart.filter(item => productId === item[0]);
    // if already in cart, remove from cart, update qty, add back to cart, update state
    if (existingProduct.length > 0) {
      const cartWithoutThisItem = currCart.filter(item => item[0] !== productId);
      product[1].qty += qty;
      if (product[1].qty < 0) product[1].qty = 0;
      const cartWithUpdatedItem = [...cartWithoutThisItem, product];
      dispatch(updateItemQty(cartWithUpdatedItem));
    // if not in cart, set quantity, update state
    } else {
      product[1].qty = 1;
      dispatch(addToCart(product))
    }
  }

  const removeItem = (product) => {
      dispatch(removeFromCart(product));
  }

  return (
    <div className="App">
      <header className="App-header">
        <AppRoutes addItem={addItem} removeItem={removeItem}/>
      </header>
    </div>
  );
}

export default App;

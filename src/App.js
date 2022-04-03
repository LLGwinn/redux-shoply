import './App.css';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import AppRoutes from './AppRoutes';

function App() {
  const dispatch = useDispatch();

  const addItem = (product) => {
    dispatch(addToCart(product))
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

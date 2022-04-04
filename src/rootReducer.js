import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QTY } from "./actionTypes";
import data from './data.json';

const INITIAL_STATE = {inventory: data.products,
                        cart: [] };

function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return ({...state, cart: [...state.cart, action.product]});
        case UPDATE_ITEM_QTY:
            return({...state, cart: action.updatedCart});
        case REMOVE_FROM_CART:
            return ({...state, 
                cart: state.cart.filter(item => item[0] !== action.payload[0])});
        default:
            return state;
    }
}

export default rootReducer;
/** Reducer for CART state */

import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = {};

export default function cartReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_TO_CART:
            return state;
        case REMOVE_FROM_CART:
            return state;
        default:
            return state;
    }
}
import { ADD_TO_CART, UPDATE_ITEM_QTY, REMOVE_FROM_CART } from "./actionTypes";

export function addToCart(product) {
    return {type: ADD_TO_CART, product: product};
}

export function updateItemQty(cart) {
    return{type: UPDATE_ITEM_QTY, updatedCart: cart}
}

export function removeFromCart(product) {
    return {type: REMOVE_FROM_CART, payload: product};
}

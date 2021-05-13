import { getById } from '../Cart/render-cart.js';

// set magic strings as constants 
const CART = 'CART';

export function getCart() {
    // get the stringy cart from local storage 
    const stringCart = localStorage.getItem(CART);

    // turns the string into actual cart owo 
    const parsedCart = JSON.parse(stringCart);

    // I need to make sure that cart even exists for the user

    if (parsedCart) {
        // If it is a parsed cart then I want it to be returned! 
        return parsedCart;
    } else {
        // If the cart doesn't exist then I should make an empty ready for the next user! 
        return [];
    }
}

export function setCart(whateverCart) {
    const stringCart = JSON.stringify(whateverCart);

    localStorage.setItem(CART, stringCart);
}
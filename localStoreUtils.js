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

export function addProductToCart(productId) {

    // This gets the cart and checks to see if there is any empty one or a loaded one already!
    const cart = getCart();


    // Looks over the cart and sees if it is missing the item that was just added, or if the item is already there to just add an extra quantity.
    const cartItem = getById(cart, productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: productId,
            quantity: 1,
        };

        // tis pushes the new item in to the array! Just adding our groceries into the cart! :D
        cart.push(newItem);
    }

    // this just makes the console remember that we have our new updated list!
    setCart(cart);
}
import { getCartTotal, renderCartItem } from './render-cart.js';
import { getCart } from '../localStoreUtils.js';

const cartItems = getCart();

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems){
    const tableRow = renderCartItem(item);
    anchor.append(tableRow);
}

const totalPrice = getCartTotal();
total.textContent = totalPrice; 
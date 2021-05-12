import { getCartTotal, renderCartItem } from './render-cart.js';
import { cartItems } from './cart-items.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems){
    const tableRow = renderCartItem(item);
    anchor.append(tableRow);
}
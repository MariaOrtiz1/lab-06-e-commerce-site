import { getCartTotal, renderCartItem } from './render-cart.js';
import { getCart } from '../localStoreUtils.js';

const cartItems = getCart();

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

const finalPurchaseButton = document.getElementById('accept-final-purchase');
const resetButton = document.getElementById('reset');

for (let item of cartItems){
    const tableRow = renderCartItem(item);
    anchor.append(tableRow);
}

const totalPrice = getCartTotal(cartItems);
total.textContent = totalPrice; 

finalPurchaseButton.addEventListener('click', () => {
    localStorage.removeItem('CART');
    window.location.replace('../index.html');
});

resetButton.addEventListener('click', () => {
    localStorage.removeItem('CART');
    window.location.replace('../potions/potion.html');
});
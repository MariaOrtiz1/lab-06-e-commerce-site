import handmadePotions from '../data/potions.js';

export function getById(someArray, ID){
    for (let item of someArray){
        if (item.id === ID){
            return item;
        }
    }
    return null;
}

export function getCartTotal(arr) {
    let accumulator = 0;

    for (let item of arr) {
        const memItems = getById(handmadePotions, item.id);

        const total = item.quantity * memItems.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}

export function renderCartItem(placeholder) {
    const cartPotion = getById(handmadePotions, placeholder.id);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');
    nameTd.textContent = cartPotion.name;
    quantityTd.textContent = placeholder.quantity;
    priceTd.textContent = `${handmadePotions.price} gold pieces`;
    const total = handmadePotions.price * placeholder.quantity;
    totalTd.textContent = `${total} gold pieces`;
    tr.append(nameTd, quantityTd, priceTd, totalTd);
    return tr;
}

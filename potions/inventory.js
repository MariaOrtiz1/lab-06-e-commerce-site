import handmadePotions from '../data/potions.js';
import { renderPotions } from './render-potions.js';

const displayItemList = document.getElementById('potion-list');

for (const potions of handmadePotions) {
    const elem = renderPotions(potions);
    displayItemList.appendChild(elem);
}

export function renderPotions(handmadePotions){
    const li = document.createElement('li');
    li.classList.add(handmadePotions.category);
    li.title = handmadePotions.description;
    
    const h3 = document.createElement('h3');
    h3.textContent = handmadePotions.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/placeholder.png`;
    img.alt = `${handmadePotions.name} image`;
    img.classList.add('potionImages');
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `It will cost ya ${handmadePotions.price} gold pieces!`;
    
    const button = document.createElement('button');
    button.classList.add('cartButton')
    button.textContent = 'Add to witch cart!';
    button.value = handmadePotions.id;
    p.appendChild(button);
    
    li.appendChild(p);
    return li;
}

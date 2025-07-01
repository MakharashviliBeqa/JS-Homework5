import { characters } from './data.js';

const htmlString = characters.map(character => {
    return `
        <div class="character-card">
            <img src="${character.image}" alt="${character.first_name} ${character.last_name}">
            <h3>${character.first_name} ${character.last_name}</h3>
            <p class="house">${character.house}</p>
        </div>
    `;
}).join('');

document.getElementById('characters-list').innerHTML = htmlString;
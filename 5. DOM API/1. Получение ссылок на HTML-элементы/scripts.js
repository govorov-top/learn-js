// Получение ссылок на HTML-элементы
// Получаем первый элемент страницы
let h1 = document.querySelector('h1');
console.log(h1);

h1 = document.querySelector('.h1');
console.log(h1);

h1 = document.querySelector('[data-number="3"]');
console.log(h1);

// Получаем все элементы на странице
const buttonsAll = document.querySelectorAll('button');
console.log(buttonsAll);

// Получаем по ID
const root = document.getElementById('root');
console.log(root);

// Получаем все элементы с классом .item
const item = document.getElementsByClassName('item');
console.log(item);

// Получаем все элементы с тегом button
const tagName = document.getElementsByTagName('button');
console.log(tagName);
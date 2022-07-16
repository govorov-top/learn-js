// Браузерные события
// https://developer.mozilla.org/ru/docs/Web/Events

let button = document.querySelector('button');

// Метод onmouseenter - при наведении мыши что-то делаем
button.onmouseenter = f1;

// Событие .addEventListener('Событие', callback()) - при наведении мыши что-то делаем
button.addEventListener('mouseenter', f2);

function f1() {
    console.dir(this);
    // Снимаем событие mouseenter
    button.onmouseenter = null;
}
function f2() {
    console.dir(this);
    // Снимаем событие mouseenter
    button.removeEventListener('mouseenter', f2);
}

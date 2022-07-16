// Объект события и работа с ним
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', handleEvent);
input.addEventListener('keypress', handleEvent);

function handleEvent(e) {
    console.log(e.type);
}
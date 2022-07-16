// Дана html страница с разметкой.
// В app.js создайте переменные со следующими элементами:
// - в переменную title сохраните элемент заголовка h1
// - в переменную btn сохраните элемент кнопки button#btn
// - в переменную subtitle сохраните элемент h2 из второй секции (с текстом Second section)
// - в переменную sections сохраните все элементы section
const title = document.getElementsByTagName('h1');
console.log(title);
const btn = document.getElementById('btn');
console.log(btn);
const subtitle = document.querySelector('h2.title.gray');
console.log(subtitle);
const sections = document.querySelectorAll('section');
console.log(sections);
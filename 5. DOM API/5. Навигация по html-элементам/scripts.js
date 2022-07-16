// Навигация по html-элементам
let ul = document.querySelector('ul');
let list = document.querySelectorAll('ul > li');
list.forEach((el,i) => {
    // el.parentElement - получаем родителя
    const parentLi = el.parentElement;
    console.dir(parentLi);
});
// el.children - получаем всех детей
const childrenUl = ul.children;
console.dir(childrenUl);

// el.firstElementChild - получаем первого потомка
const firstChildUl = ul.firstElementChild;
console.dir(firstChildUl);
// или
console.dir(childrenUl[0]);

// el.lastElementChild - получаем последнего потомка
const lastChildUl = ul.lastElementChild;
console.dir(lastChildUl);

// el.nextElementSibling - получаем следующий элемент после UL
const nextElementUl = ul.nextElementSibling;
console.dir(nextElementUl);

// el.previousElementSibling - получаем предыдущий элемент перед UL
const previousElementUl = ul.previousElementSibling;
console.dir(previousElementUl);
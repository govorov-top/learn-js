// Объект classList и работа с ним

let list = document.querySelectorAll('ul > li');
console.log(list);
list.forEach((el,i) => {
    // el.classList.add - добавляем класс элементу
    el.classList.add('new1');
    if(i % 2){
        // el.classList.remove - удаляем класс у элемента
        el.classList.remove('new1');
    }
    // el.classList.contains - если элемент имеет класс
    if (el.classList.contains('item-3')){
        el.classList.add('item3_1');
    }
    // el.classList.toggle - если элемент имеет класс то, удаляем этот класс, если нет добавляем
    el.classList.toggle('item-5');
});
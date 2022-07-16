// Свойства html-элементов и работа с ними

let h1 = document.querySelector('h1');
// Получаем текст тега
console.log(h1.innerText);
// Получаем HTML тега
console.log(h1.innerHTML);
// Получаем конкретный атрибут тега
console.log(h1.getAttribute('class'));
// Устанавливаем конкретный атрибут тега
h1.setAttribute('id', 'test_id');
// Получаем классы в строку
console.log(h1.className);
// Получаем стили тега
h1.style.color = "red";
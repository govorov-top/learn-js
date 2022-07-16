// В html даны кнопки с id clicker1 и clicker2.
// У кнопок есть атрибут data-clicked, в котором хранится информация о количестве кликов по данной кнопке.
// Создайте одну общую функцию для обработки клика на эти кнопки, которая будет увеличивать информацию о количестве
// кликов на той кнопке, на которую был сделан клик.
// Предусмотрите, что количество кнопок в дальнейшем может меняться - три, пять кнопок и так далее.
const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    const el = buttons[i];
    el.addEventListener('click', counter);
}
function counter(e) {
    const el = e.target;
    let attr = Number(el.getAttribute('data-clicked'));
    el.setAttribute('data-clicked',`${++attr}`);
}
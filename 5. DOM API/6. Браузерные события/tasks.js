// Дана разметка и стили к ней.
// По умолчанию панели .panel не отображаются.
// Сделайте так, что при клике на кнопки .accordion открывались следующие за ними панели.
// При повторном клике панели должны скрываться.
// Примечание 0: при автотестах некорректно работает querySelector, используйте выборку через getElementsByClassName.
// Примечание 1: нельзя повесить обработчик клика на коллекцию элементов, но можно на конкретный элемент.
// Примечание 2: используйте селекторы соседей относительно доступных элементов.
const accordions = document.getElementsByClassName('accordion');
for (let i = 0; i < accordions.length; i++) {
    const el = accordions[i];
    el.addEventListener('click', accordion);
}
function accordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
    return true;
}
// Обход HTML коллекций

let list = document.querySelectorAll('ul > li');
console.log(list);
list.forEach(el => el.className += ' new')

let list2 = document.getElementsByTagName('li');
console.log(list2);
for (let i = 0; i < list2.length; i++) {
    list2[i].innerText += ' new';
}
for (const list2Element of list2) {
    list2Element.innerText += ' new2';
}
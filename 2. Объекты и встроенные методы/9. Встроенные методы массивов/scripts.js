// Встроенные методы массивов

const arrStr = [
    'JavaScript',
    'PHP',
    'MySQL',
    'CSS',
    'HTML',
];

// slice - забираем из массива значения от 1 до 3
console.log('slice:', arrStr.slice(1, 3));

// join - массив в строку, передаём в аргумент то чем разделяем
console.log('join:', arrStr.join(', '));

// Проверяем есть ли в массиве значение
console.log('includes «PHP»:', arrStr.includes('PHP'));

// unshift - Добавляем значение массива в начало
// также возвращает добавляемое значение массива
arrStr.unshift('unshift_item')
console.log('unshift:', arrStr);

// shift - Удаляем первое значение массива,
// также возвращает удаляемое значение массива
console.log('shift:', arrStr.shift());

// Удаляем значение из массива
delete arrStr[0];
console.log('delete:',arrStr);

// indexOf - выведет индекс элемента, если не найдено то -1
console.log('indexOf не найдено:', arrStr.indexOf('JavaScript'));
console.log('indexOf найдено:', arrStr.indexOf('CSS'));

// concat объединяет 2 массива в 1 новый
// Также добавляет новые значения .concat(1,2,3...)
// Также копирует массив в переменную
const test = ['test_1','test_2','test_3','test_4','test_5'];
const newArr = arrStr.concat(test).concat('добавили 1','добавили 2');
console.log('concat:', newArr);

// forEach(val,key) перебор массива, аналог foreach в PHP
newArr.forEach((val,key) => {
    console.log('forEach:','(Ключ: ' + key,'Значение: ' + val + ')');
});

// map - модифицирование массива
let newArr2 = test.map((val,key,arr) => {
    return val.includes('test_3');
});
console.log('map:',newArr2);

// find поиск по массиву. Находит только первое совпадение.
let find = test.find((val, key, obj) => {
    return val.includes('test_2');
});
console.log('find:',find);

// filter поиск по массиву. Находит все совпадения.
let filter = test.filter((val,key,arr) => {
    return val.includes('test');
});
console.log('filter:',filter);

// Деструктуризация
let [name1, name2, name3, ...rest] = test;

console.log('Деструктуризация:',name1,name2,name3);
console.log('Деструктуризация оставшееся:',rest);
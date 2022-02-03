// Объект RegExp регулярного выражения

const regExp_1 = /\\w+/;
const regExp_2 = new RegExp('\\w+');
const str = 'JavaScript is cool language! Everybody should learn JavaScript.'

// Ищем вхождение JavaScript
console.log(/JavaScript/.test(str));

// i - без учета регистра
console.log(/javascript/i.test(str));

// replace - заменяем в строке
// g - все вхождения
console.log(str.replace(/javascript/ig, 'PHP'));

// match - вернёт массив с информацией
console.log(str.match(/javascript/ig));
// Типы данных

let x = undefined; // typeof = undefined
console.log(x, typeof x);
x = null;      // typeof = object
console.log(x, typeof x);
// boolean
x = true;
console.log(x, typeof x);
x = false;
console.log(x, typeof x);
// String - typeof = string
x = `Hi`;
console.log(x, typeof x);
//Symbol
x = Symbol(1); //typeof = symbol
console.log(x, typeof x);
// Number
x = 15;
console.log(x, typeof x);
x = 3.14;
console.log(x, typeof x);
x = NaN; // typeof = number
console.log(x, typeof x);

// Object = [Объект, Массив, Функция, Ошибка]
x = {};
console.log(x, typeof x);
x = [];
console.log(x, typeof x);
// Математические операторы
// Бинарные операторы: -,+,*,/,%,**
// Унарные операторы: -,+
let x = -1;
x = -0
x = +0
x = 0
x = + "2"                   // typeof = number
console.log(x, typeof x);
x = + "2 string"            // NAN typeof = number
console.log(x, typeof x);

// Конкатенация
x = 5 + "2"                 // typeof = string
console.log(x, typeof x);
x = 2 + "2 string"          // typeof = string
console.log(x, typeof x);

// Инкремент и декремент: --,++
x = 0;

// ++x = (x = x + 1)
console.log(`++x: Было: ${x}`,`Стало: ${++x}`, typeof x);
// --x = (x = x - 1)
console.log(`--x: Было: ${x}`,`Стало: ${--x}`, typeof x);
// x++ = (x = x + 1)
console.log(`x++: Было: ${x}`,`Вызвали x++: ${x++}`,`При следующем вызове переменной x будет = ${x}`, typeof x);
// x-- = (x = x - 1)
console.log(`x--: Было: ${x}`,`Вызвали x++: ${x--}`,`При следующем вызове переменной x будет = ${x}`, typeof x);

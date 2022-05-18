// Встроенные методы строк

const str = 'JavaScript ';
// Строку в нижний регистр
console.log('toLowerCase:', str.toLowerCase());

// Строку в верхний регистр
console.log('toUpperCase:', str.toUpperCase());

// Проверяем есть ли в строке ___
// Раньше использовали .indexOf()
console.log('includes «rip»:', str.includes('rip'));

// Регистр важен!
console.log('includes «script»:', str.includes('script'));

// Slice работает как массив от 0 до 5 вывести символы
console.log('slice:', str.slice(0,5));

// Split разбиваем строку на массив по разделителю
console.log('split «a»:', str.split('a'));

// Join массив в строку, передаём в аргумент то чем разделяем
console.log('join «a»:', str.split('a').join('a'));

// Trim очищаем от пробелов в начале и в конце строки
console.log('Trim:', str.trim());
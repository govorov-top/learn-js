/*
 Понятие стека и очереди FIFO и FILO
 */

// 1) Queue (Очередь) - FirstInFirstOut (Первый пришел первый ушел)
// Методы: push/shift
// Минусы: при каждом удаление элемента из массива происходит перерасчет индексов
const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
console.log('До .shift()', arr);
arr.shift();

console.log('После .shift()',arr);

// 2) Stack (Стек) - FirstInLastOut (Первый пришел последний ушел)
// Методы: push/pop
// Плюсы: при каждом удаление элемента из массива НЕ происходит перерасчет индексов
const arr2 = [];
arr2.push(1);
arr2.push(2);
arr2.push(3);
arr2.push(4);
console.log('До .pop()', arr2);
arr2.pop();
arr2.pop();

console.log('После .pop()',arr2);
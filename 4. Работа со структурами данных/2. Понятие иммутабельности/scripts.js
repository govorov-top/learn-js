/*
 Понятие иммутабельности (Immutable)
 Иммутабельный - неизменяемый
 */

const arr = [1,2,3,4,5];

// Если нужно внести изменения в иммутабельный массив
const newArr = arr.slice(0,arr.length); // [1,2,3,4,5]
console.log(newArr);

const newArr2 = [...arr]; // [1,2,3,4,5]
console.log(newArr2);

const obj = {a:1,b:2,c:3};
obj.d = 4; // mutation (Не стоит так делать...)
obj.с = 5; // mutation (Не стоит так делать...)

// Как надо:
const obj2 = {
    ...obj,
    // Также внутри объекта сразу можно переопределить необходимы ключи и методы
    a: 10,
    b: 22,
    // И добавить новые
    g: 100
} // return {a: 10, b: 22, c: 3, d: 4, g: 100, с: 5}
console.log(obj2);
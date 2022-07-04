/*
 Глобальные методы
 */
console.log(Number(-0));
console.log(String(0));
console.log(Boolean(0));
console.log(Boolean(1));
const obj = {
    a:1,
    b:{
        c:2,
    },
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
// Объект объектов
console.log(Object.entries(obj));
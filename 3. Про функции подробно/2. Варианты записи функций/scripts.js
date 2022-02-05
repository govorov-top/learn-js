// Варианты записи функций

// Объявление функции - декларация функции
function sum1(a,b) {
    return a + b;
}
console.log(sum1(5,7));

// Функциональное выражение
const sum2 = function (a,b) {
    return a + b;
}
console.log(sum2(5,7));

// IIFE (Immediately-invoked function expression)
(function(a,b){
    return a + b;
} (5, 4));

// Стрелочные функции
const sum3 = (a,b) => {
    return a + b;
}
console.log(sum3(5,7));

// Короткая запись стрелочной функции
const sum4 = (a,b) => a + b;
console.log(sum4(5,7));
const sum5 = x => x + sum4(5,8);
console.log(sum5(5,7));


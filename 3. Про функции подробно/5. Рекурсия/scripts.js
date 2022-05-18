// Рекурсия

// 1. Базовое условия (терминальное) выхода из рекурсии
// 2. правило движение рекурсии
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(30)); // 30 * 29 * 28 ...

// function принимает символ и возвращает его в 5 экземплярах
let counter = 0;

function repeater(symbol, num) {
    counter++;
    if (counter === num){
        counter = 0;
        return symbol;
    }
    return symbol + repeater(symbol, num);
}

console.log(repeater('x', 10));

function getLength(array) {
    if (array.pop() === undefined) return 0;
    return 1 + getLength(array);
}
console.log(getLength([1]));
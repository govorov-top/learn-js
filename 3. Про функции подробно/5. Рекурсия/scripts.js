// Рекурсия

// Функция - функция, которая что-то возвращает
function sum(a,b) {
    return a + b;
}
let res = sum(5,9);
console.log(res);

// Процедуры - функция, которая ничего не возвращает
function sumNoReturn(a,b) {
    console.log(a + b);
}

res = sumNoReturn(5,9);
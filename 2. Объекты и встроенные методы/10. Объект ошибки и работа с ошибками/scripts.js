// Объект ошибки и работа с ошибками

function sum(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Ошибка!')
    }
    return a + b;
}
try {
    sum('d' + 5);
} catch (error) {
    console.error(error);
}

console.log('Продолжаем работу кода при любых исходах!');
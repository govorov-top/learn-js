// Встроенные методы чисел

const num = 546541996.0301546448;

// toFixed - округление до определенного кол-ва десятичных
console.log('toFixed:', num.toFixed(3));

// toLocaleString нормализируем вывод числа с разделителями
const rub = num.toLocaleString('ru-RU',{
    style: 'currency',
    currency: 'RUB'
});
console.log('toLocaleString:', rub);
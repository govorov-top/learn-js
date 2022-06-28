/*
 Фильтрация
 */
const numbers = [1,2,3,4,5,6,7,8,9,10];
const oddNumbers = numbers.filter(num => num % 2 !== 0); // [] ожидаем новый массив
const evenNumbers = numbers.filter(num => num % 2 === 0); // [] ожидаем новый массив
console.log('Оригинальный массив: ',numbers);
console.log('Отфильтрованный массив ODD: ',oddNumbers);
console.log('Отфильтрованный массив EVEN: ',evenNumbers);

// Коллекция
const products = [
    {
        id: 1,
        name: 'Intro to JavaScript',
        category: 'books',
        price: 150,
        ebook: true
    },
    {
        id: 2,
        name: 'Intro to CSS',
        category: 'books',
        price: 120,
        ebook: false
    },
    {
        id: 3,
        name: 'Deep dive into JavaScript',
        category: 'books',
        price: 350,
        ebook: false
    },
    {
        id: 4,
        name: 'Intro to PHP',
        category: 'books',
        price: 250,
        ebook: true
    },
    {
        id: 5,
        name: 'Deep dive into PHP',
        category: 'books',
        price: 350,
        ebook: false
    },
];

const eBooks = products.filter(book => book.ebook);
console.log(eBooks);
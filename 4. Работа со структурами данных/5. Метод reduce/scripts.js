/*
 Метод reduce
 */
const products = [
    {
        id: 1,
        name: 'Intro to JavaScript',
        category: 'books',
        price: 150,
    },
    {
        id: 2,
        name: 'Intro to CSS',
        category: 'books',
        price: 120,
    },
    {
        id: 3,
        name: 'Deep dive into JavaScript',
        category: 'books',
        price: 350,
    },
    {
        id: 4,
        name: 'Intro to PHP',
        category: 'books',
        price: 250,
    },
    {
        id: 5,
        name: 'Deep dive into PHP',
        category: 'books',
        price: 350,
    },
];
const allPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(allPrice);

const allPrice2 = products.reduce((acc, product) => product.price < 300 ? acc + product.price : acc, 0);
console.log(allPrice2);

const allPrice3 = products.reduce((acc, product) => {
    return [...acc, product.price]
}, []);
console.log(allPrice3);
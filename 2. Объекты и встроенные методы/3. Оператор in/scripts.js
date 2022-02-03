// Оператор in

const Roma = {
    age: 25,
    skills: [
        'JavaScript',
        'PHP',
        'MySQL'
    ],
    isJob: false,
};

// Проверяем есть ли ключ в массиве
console.log('age' in Roma);
console.log('dog' in Roma);
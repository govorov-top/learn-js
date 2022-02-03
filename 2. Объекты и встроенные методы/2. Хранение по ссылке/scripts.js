// Хранение по ссылке

const Roma = {
    age: 25,
    skills: [
        'JavaScript',
        'PHP',
        'MySQL'
    ],
    isJob: false,
};

// Сохранение по ссылке
const Oleg = Roma;
console.log('Roma: ', Roma.age);
console.log('Oleg: ', Oleg.age);
Oleg.age = 30;
console.log('Roma: ', Roma.age);
console.log('Oleg: ', Oleg.age);
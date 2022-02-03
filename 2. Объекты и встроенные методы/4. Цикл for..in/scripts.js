// Цикл for..in

const Roma = {
    age: 25,
    skills: [
        'JavaScript',
        'PHP',
        'MySQL'
    ],
    isJob: false,
};

// Перебор объекта
for (const prop in Roma) {
    console.log('Ключ объекта:', prop);
    console.log(`Значение ${prop}:`, Roma[prop]);
}
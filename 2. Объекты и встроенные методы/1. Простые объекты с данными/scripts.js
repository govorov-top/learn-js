// Простые объекты с данными

const obj = {
    name: 'Roma',
    surname: 'Govorov',
    age: 25,
    skills: [
        'JavaScript',
        'PHP',
        'MySQL'
    ],
    isJob: false,
};
// Вывод свойств
console.log(obj.name);
// Вывод массива
console.log(obj.skills);
// Переопределение
obj.isJob = true
console.log('isJob: ', obj.isJob);
// Удаление
delete obj.isJob;
console.log('isJob: ', obj.isJob);
// Добавление
obj.isJob = true
console.log('isJob: ', obj.isJob);
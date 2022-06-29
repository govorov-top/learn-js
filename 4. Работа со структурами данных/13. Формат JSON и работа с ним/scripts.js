/*
 Формат JSON и работа с ним
 */
const strings = ['Roma', 'Anna', 'Olga', 'Evgeny', 'Oleg'];
const [
    // Если нет, добавляем свои данные
    name1 = 'Роман',
    name2 = 'Анна',
    ,
    ...other // []
] = strings;
console.log(name1, name2, other);


const numbers = [5,[1,2],3,4,6,7,8,9,10];
const [a,b,c,,,...otherNumbs] = numbers;
console.log(a,b,c,otherNumbs);
// Работа с объектами
const developers = [
    {
        id: 1,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
    },
    {
        id: 2,
        fullName: 'Petr Petrov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
    },
    {
        id: 3,
        fullName: 'Ian Melnikov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
    },
    {
        id: 4,
        fullName: 'Antonio Banderas',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
    },
];
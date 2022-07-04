/*
 Деструктуризация объектов
 */
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
const developer = {
    id: 75,
    salary: 2500,
    fullName: 'Ivan Ivanov',
    skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug'],
    area: 'frontend',
    languages: {
        english: 'B2',
        spanish: 'native',
    }
};
const area = 'backend';
const {
    area: areaDev = 'fullstack',
    id,
    skills: [
        , , git
    ],
    languages: {
        spanish
    },
    ...other} = developer;
console.log(`area: ${area}`,`areaObj: ${areaDev}`);
console.log(id);
console.log(spanish);
console.log(git);
console.log(other);

// Деструктуризация в существующие переменные
let fullName,salary;
({fullName,salary} = developer);
console.log(fullName,salary);
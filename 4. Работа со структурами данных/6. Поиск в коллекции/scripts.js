/*
 Поиск в коллекции
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
// Вернуть объект
const firstDeveloperHTML = developers.find(item => item.skills.includes('React'));
console.log(firstDeveloperHTML);
// Вернуть индекс
const firstDeveloperHTML2 = developers.findIndex(item => item.skills.includes('React'));
console.log(firstDeveloperHTML2);
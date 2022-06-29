/*
 Оператор остатка (Spread or Rest)
 */
// Работа со строками
const numbers = [5,1,2,3,4,6,7,8,9,10];
const strings = ['Roma', 'Anna', 'Olga', 'Evgeny'];
const newArray = [...strings, ...numbers];
console.log(newArray);

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
const developer = {
    id: 1,
    fullName: 'Ivan Ivanov',
    skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
};
const newDev = {...developer};
newDev.id = 50;
console.log(newDev);
console.log(developer);

function sum(a,b,...args) {
    let result = a + b;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    console.log(result);
    return result;
}
sum(6,3, 5, 52, 85);
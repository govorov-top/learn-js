/*
 Сортировка массива
 */

// Сортировка чисел
const numbers = [5,1,2,3,4,6,7,8,9,10];
numbers.sort((a, b)=>a - b)
console.log(numbers.reverse());

// Сортировка строк
const strings = ['Roma', 'Anna', 'Olga', 'Evgeny'];
strings.sort(sortingStrings);
function sortingStrings(a,b) {
    if (a > b){
        return 1;
    }
    if (a < b){
        return -1;
    }
    return 0;
}
console.log(strings);

// Сортировка коллекций
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
developers.sort((a,b)=>sortingStrings(a.fullName,b.fullName));
console.log(developers);
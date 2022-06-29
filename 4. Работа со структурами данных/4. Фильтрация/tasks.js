// 1) Дан массив food и коллекция players.
// Создайте одну общую функцию сортировки, которая бы позволяла сортировать food по алфавиту от А-Я,
// а также игроков коллекции по ключу surname. И отсортируйте данные массивы, с помощью созданной функции.
const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Strawberry"];
food.sort(sortingStrings);

const players = [
    {
        id: 1,
        name: 'Cristiano',
        surname: 'Ronaldo',
        club: 'Juventus',
    },
    {
        id: 2,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
    {
        id: 3,
        name: 'Karim',
        surname: 'Benzema',
        club: 'Real Madrid',
    },
    {
        id: 4,
        name: 'Maxi',
        surname: 'Gomez',
        club: 'Valencia',
    },
    {
        id: 5,
        name: 'Quincy',
        surname: 'Promes',
        club: 'Spartak',
    },
];
players.sort((a,b)=>sortingStrings(a.surname,b.surname));

function sortingStrings(a,b) {
    if (a > b){
        return 1;
    }
    if (a < b){
        return -1;
    }
    return 0;
}
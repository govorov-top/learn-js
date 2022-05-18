// Методы объекта, контекст

const user = {
    name: 'Roma',
    age: 25,
    skills: [
        'JavaScript',
        'PHP',
        'MySQL'
    ],
    isJob: false,
    updateAge(){
        ++this.age;
    },
    updateName(name){
        this.name = name;
    }
};
console.log(user);

// Работа с методами
user.updateAge();
console.log(user);
user.updateName('Оля');
console.log(user);
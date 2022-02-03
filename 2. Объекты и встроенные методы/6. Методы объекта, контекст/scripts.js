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
        this.age++;
    },
    updateName(name){
        this.name = name;
    }
};

// Работа с методами
user.updateAge();
console.log(user.age);
user.updateName('Оля');
console.log(user.name);
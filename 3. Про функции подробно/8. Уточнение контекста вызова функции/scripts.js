// Уточнение контекста вызова функции

const developer = {
    name: 'Роман',
    salary: 2500,
    getBonus(sum){
        return console.log(this.name, 'в этом месяце получает', this.salary + sum + "₽");
    }
}
developer.getBonus(25);

const manager = {
    name: 'Анна',
    salary: 1500,
}
developer.getBonus.call(manager, 150);
developer.getBonus.apply(manager, [150]);

// bind - привязка
manager.getBonus = developer.getBonus.bind(manager);
// теперь у manager своя собственная функция getBonus
manager.getBonus(50)
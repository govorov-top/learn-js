// Контекст вызова функции

const dog = {
    name: 'Marcy',
    say(){
        const greeting = () => {
            return console.log(this.name);
        }
        function greeting2 () {
            return console.log(this.name);
        }
        setTimeout(greeting, 1000);
        setTimeout(greeting2, 2000);
        return true;
    }
}
dog.say();
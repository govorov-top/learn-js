// Замыкание в JS - Closure

// Замыкание это когда функция возвращается из другой функции
// Возвращаемая функция запоминает область видимости (scope)

// Пример 1
function hi(name) {
    return () => console.log('Hi', name);
}
const hiName = hi('Roma');
hiName();

// Пример 2
function outer() {
    let counter = 0;

    function counterPlusPlus() {
        console.log(++counter);
    }

    return counterPlusPlus;
}
let go = outer();
go();
go();
go();
let go2 = outer();
go2();
go2();
go2();
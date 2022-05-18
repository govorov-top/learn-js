// Понятие функции
//Функция multiply - принимает 3 значения, перемножает их
// и возвращает результат
function multiply(v1,v2,v3) {

    if (
        (v1 >= 0) &&
        (v2 >= 0) &&
        (v3 >= 0)
    ){
        return v1 * v2 * v3;
    }else {
        return 'Что-то пошло не так..';
    }
}
let f1 = multiply(6,3,4);
console.log(f1);

//Функция euroToRub - принимает один параметр (число в евро)
// и возвращает число - количество рублей по курсу 1 евро = 90 рублей
function euroToRub(numEuro) {
    if (numEuro >= 0){
        return numEuro * 90;
    }else {
        return alert('Что-то пошло не так..');
    }
}
let f2 = euroToRub(2);
console.log(f2);

//Функция milesToKm - принимает один параметр (число в милях)
// и возвращает значение в километрах
function milesToKm(mile){
    mile *= 1.609;
    return mile;
}
let f3 = milesToKm(2);
console.log(f3);
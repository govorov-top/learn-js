// Условные операторы
let age = 25;

if (age => 18) {
    console.log('Access granted');
}else {
    console.log('Access denied');
}

let salary = 2000;
if (salary < 3000) console.log('I need to improve! (Мне нужно совершенствоваться)');

if (salary > 3000) {
    console.log('It\'s time to relax');
}else if (salary > 2500){
    console.log('Well, good enough. But i can be better.');
}else {
    console.log('Something else.');
}

/*
 Маппинг массивов и коллекций - обход и преобразование
 Методы: map, forEach
 */

const numbers = [1,2,3,4,5,6,7,8,9,10];
const newArrNumbers = [];
// forEach
numbers.forEach( (el,i,arr) => {
    newArrNumbers.push(el * 2);
});
console.log(newArrNumbers);

// map
const result = numbers.map((el,i,arr)=>el * 2); // новый массив, numbers не затрагивается
console.log(result);
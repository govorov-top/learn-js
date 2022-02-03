// Массивы как хранилища данных

const arrNum = [1,2,3,4,5,6,7,8,9,10];
console.log('Первый элемент массива: ', arrNum[0]);

// Меняем значение в массиве и после выводим
arrNum[0] = 155;
console.log('Меняем значение в массиве: ', arrNum[0]);

// Узнаем длину массива
let length = arrNum.length
console.log('length:', length);

const arrStr = [1,'food', 'apple'];
// Добавление в конец массива
// с помощью .push('значение_1','значение_2', ...)
arrStr.push('new');
console.log('push:',arrStr);

// Удаление последнего элемента массива,
// также возвращает удаляемое значение массива
console.log('pop:', arrStr.pop());

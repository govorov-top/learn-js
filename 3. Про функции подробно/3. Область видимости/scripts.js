// Область видимости - scope

let isValid = false;
const str = 'Hello';

function isString(str) {
    const isValid = typeof str === 'string';
    console.log(isValid);
    return isValid;
}
const result = isString('Привет мир!');
// Колбеки и функции высшего порядка

function copyArrayAndDoSmth(arr, instructions) {
    const output = [];
    for (let i = 0; i < arr.length; i++){
        output.push(instructions(arr[i]));
    }
    return output;
}

function numSquared(num) {
    return num * num;
}
//const numSquared = 55;
const res = copyArrayAndDoSmth([1,2,3], numSquared)
console.log(res);
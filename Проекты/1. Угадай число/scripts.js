// Проект: Угадай число
function guessNum(number, tries) {
    const secretNum = Math.ceil(Math.random() * 10);
    if (tries >= 5) {
        alert('Попытки кончились...');
        return true;
    }

    if (number === secretNum){
        alert('Угадал(a)!');
        return true;
    }else {
        alert('Не угадал(a)!');
        return false;
    }
}
document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', function () {
        let number = el.getAttribute('data-number');
        guessNum(number, 0);
    });
});
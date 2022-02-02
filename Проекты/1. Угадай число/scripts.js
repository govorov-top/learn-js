// Проект: Угадай число
function guessNum(number, tries) {
    console.log(tries);
    const secretNum = Math.ceil(Math.random() * 10);
    if (tries >= 3) {
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
        if (number){
            let tries = localStorage.getItem('tries');
            if (!tries) localStorage.setItem('tries', '3');
            const result = guessNum(number, tries);
            if (!result){
                tries++;
                localStorage.setItem('tries', tries)
            }
        }
    });
});

document.querySelector('button[data-reset="1"]').addEventListener('click', function () {
    localStorage.setItem('tries', '0');
    document.location.reload();
});
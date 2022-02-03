// Проект: Загадки

const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
        if (this.tries && (guessedAnswer.toLowerCase() === this.correctAnswer)){
            alert('Правильный ответ');
            console.log('Правильный ответ');
            return true;
        }else {
            if (!this.tries){
                this.gameTheEnd();
            }else {
                this.tries--;
                const hint = this.hints[this.tries === 2 ? 0 : 1 ];
                alert('Неправильный ответ');
                console.log('Неправильный ответ');
                if (this.tries) {
                    alert(`Держи подсказку: ${hint}`);
                }else {
                    this.gameTheEnd();
                }
                return false;
            }
        }
    },
    gameTheEnd(){
        console.log('Игра окончена');
        alert('Игра окончена');
        return false;
    }
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    const input = document.getElementById('send');
    const guessedAnswer = input.value;
    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
    }
}
// Проект: Замена значений в строке из массивов
function censor() {
    const arrAllReplacedText = [];
    const changeScene = (text1, text2 = '') => {
        if (text2){
            arrAllReplacedText.push([text1, text2]);
        }
        for (const arrReplacedText of arrAllReplacedText) {
            text1 = text1.replace(new RegExp(arrReplacedText[0], 'ig'), arrReplacedText[1]);
        }
        return text1;
    };
    return changeScene;
}

const changeScene = censor();
console.log(changeScene('PHP', 'JS'));
console.log(changeScene('backend', 'frontend'));
console.log(changeScene('PHP is the most popular programming language for backend web-development'));
// должно распечатать 'JS is the most popular programming language for frontend web-development'

document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    const changeScene = censor();
    const form = document.querySelector('form');
    let what = form.querySelector('input[name="what"]');
    let whatReplace = form.querySelector('input[name="whatReplace"]');
    let where = form.querySelector('textarea');
    changeScene(what.value, whatReplace.value);
    document.getElementById('res').innerHTML = changeScene(where.value);
});
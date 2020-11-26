'use strict';

function randomInteger(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}



/*Comment after Tests*/
function guessNumber() {
    let guess;
    let luckyNumber = randomInteger(1, 100);
    let counter = 9;
    function gameStart() {
        guess = prompt('Угадай число от 1 до 100');

    if (parseInt(guess) > luckyNumber && typeof parseInt(guess) === 'number') {
        alert(`Загаданное число меньше, осталось попыток: ${counter}`);
        if (counter === 0) {
            let question = confirm('Попытки закончились, хотите сыграть еще?');
            if (question) {
            counter = 9;
            gameStart();
            luckyNumber = randomInteger(1, 100);
        } 
    } else {
        --counter;
    }
    gameStart();
    } else if (parseInt(guess) < luckyNumber && typeof parseInt(guess) === 'number') {
        alert(`Загаданное число больше, осталось попыток: ${counter}`);
        if (counter === 0) {
            let question = confirm('Попытки закончились, хотите сыграть еще?');
            if (question) {
                counter = 9;
                gameStart();
            luckyNumber = randomInteger(1, 100);
        }
    } else {
        --counter;
    }
    gameStart();
    } else if (guess === null) {
        alert('Игра окончена :(');
    } else if (isNaN(guess)) {
        alert('Введи число!');
        gameStart();
    }  else if (parseInt(guess) === luckyNumber) {
        alert('Поздравляю, Вы угадали!!!');
       let question = confirm('Хотите сыграть еще?');
       if (question) {
        counter = 9;
        luckyNumber = randomInteger(1, 100);
        gameStart();
       }
    }
    }
    gameStart();
}

guessNumber();

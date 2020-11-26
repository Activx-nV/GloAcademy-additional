'use strict';

function randomInteger(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}


function guessNumber() {
    let luckyNumber = randomInteger(1, 100);
    let guess;
    function gameStart() {
        guess = prompt('Угадай число от 1 до 100');

    if (parseInt(guess) > luckyNumber && typeof parseInt(guess) === 'number') {
        alert('Загаданное число меньше');
        gameStart();
    } else if (parseInt(guess) < luckyNumber && typeof parseInt(guess) === 'number') {
        alert('Загаданное число больше');
        gameStart();
    } else if (guess === null) {
        alert('Игра окончена');
    } else if (isNaN(guess)) {
        alert('Введи число!');
        gameStart();
    }  else if (parseInt(guess) === luckyNumber) {
        alert('Поздравляю, Вы угадали!!!');
       let question = confirm('Хотите сыграть еще раз?');
       if (question) {
        luckyNumber = randomInteger(1, 100);
        gameStart();
       }
    }
    }
    gameStart();
}
guessNumber();

'use strict';

function randomInteger(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

let luckyNumber = randomInteger(1, 101);
let guess;

/*Comment after Tests*/alert(`Lucky number: ${luckyNumber} (For test purposes)`);
function guessNumber() {
    
    guess = prompt('Угадай число от 1 до 100');

    if (parseInt(guess) > luckyNumber && typeof parseInt(guess) === 'number') {
        alert('Загаданное число меньше');
        guessNumber();
    } else if (parseInt(guess) < luckyNumber && typeof parseInt(guess) === 'number') {
        alert('Загаданное число больше');
        guessNumber();
    } else if (guess === null) {
        alert('Игра окончена');
    } else if (isNaN(guess)) {
        alert('Введи число!');
        guessNumber();
    }  else if (parseInt(guess) === luckyNumber) {
        alert('Поздравляю, Вы угадали!!!');
       let question = confirm('Хотите сыграть еще раз?');
       if (question) {
        guessNumber();
        luckyNumber = randomInteger(1, 100);
       }
    }
}
guessNumber();

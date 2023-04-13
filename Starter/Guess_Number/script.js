/* handling class event

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.secretNumber').textContent = 18;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;

*/

/* handling click event */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent =
        message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        if (score > 1) {
            displayMessage('No Number!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('you lost the game');
            document.querySelector('.score').textContent = score;
        }
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        score++;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.score').textContent = score;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Guess is to High' : 'Guess is to low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('you lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing..');
    document.querySelector('.score').textContent =
        score;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.
        backgroundColor = '#222'
    document.querySelector('.number').style.
        width = '30rem'
})


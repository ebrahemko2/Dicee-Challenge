let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let dices = document.querySelectorAll('.dice img');

dices[0].src = 'images/dice' + randomNumber1 + '.png';
dices[1].src = 'images/dice' + randomNumber2 + '.png';
let header = document.querySelector('h1');
if (randomNumber1 > randomNumber2) {
    header.textContent = "🎈 Player1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    header.textContent = "Player2 Wins! 🎈";
} else {
    header.textContent = "🎈 You Are Drawn! 🎈";
}


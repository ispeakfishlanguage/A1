const playerScore = document.getElementById('score-player');
const computerScore = document.getElementById('score-computer');
const dice = document.getElementById('dice');
const gameResult = document.getElementById('game-result');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const tie = document.getElementById('tie');

let playerResult;
let computerResult;
let wins = 0;
let loses = 0;
let ties = 0;

function throwDice () {
  return Math.floor(Math.random() * 6) + 1;
}

function updateScore () {
  if (playerResult === computerResult) {
    gameResult.innerHTML = "It's a tie!";
    ties++;
  } else {
    gameResult.innerHTML = playerResult < computerResult ? "Computer wins!": "You win!";
    playerResult < computerResult ? loses++ : wins++;
  }
  win.innerHTML = "Won: " + wins;
  lose.innerHTML = "Lose: " + loses;
  tie.innerHTML = "Won: " + ties;
}



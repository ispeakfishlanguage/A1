const playerScore = document.getElementById('score-player');
const computerScore = document.getElementById('score-computer');
const dice = document.getElementById('dice');
const gameResult = document.getElementById('game-result');
const win = document.getElementById('win');
const lose = document.getElementById('lose');
const tie = document.getElementById('tie');
const playerHistory = document.getElementById('playerHistory');
const computerHistory = document.getElementById('computerHistory');

let playerResult;
let computerResult;
let wins = 0;
let loses = 0;
let ties = 0;

let playerHistoryThrows = [];
let computerHistoryThrows = [];

function throwDice () {
  return Math.floor(Math.random() * 6) + 1;
}

function updateScore () {
  if (playerResult === computerResult) {
    gameResult.innerHTML = "It's a tie!";
    ties++;
  } else if (playerResult < computerResult) {
    gameResult.innerHTML = "Computer wins!";
    loses++;
  } else {
    gameResult.innerHTML = "You win!";
    wins++;
  }
  win.innerHTML = "Won: " + wins;
  lose.innerHTML = "Lost: " + loses;
  tie.innerHTML = "Tie: " + ties;
}

function updateHistory () {
  playerHistoryThrows.push(playerResult);
  computerHistoryThrows.push(computerResult);
  playerHistory.innerHTML = "Player: " + playerHistoryThrows;
  computerHistory.innerHTML = "Computer: " + computerHistoryThrows;
}

function playARound () {
  playerResult = throwDice();
  playerScore.innerHTML = playerResult;
  computerResult = throwDice();
  computerScore.innerHTML = computerResult;
  updateScore();
  updateHistory();
}

dice.addEventListener('click', playARound);



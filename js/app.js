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

// Initialize history arrays
let playerScoreHistory = [];
let computerScoreHistory = [];

// Get previous results from cookies
let previousPlayerScore = getCookie("playerScoreHistory");
let previousComputerScore = getCookie("computerScoreHistory");

// Check if previous scores exist and update history if so
if (previousPlayerScore) {
  playerScoreHistory = previousPlayerScore.split(','); // Split the string back into an array
  playerHistory.innerHTML = "Player: " + playerScoreHistory.join(', ');
}

if (previousComputerScore) {
  computerScoreHistory = previousComputerScore.split(','); // Split the string back into an array
  computerHistory.innerHTML = "Computer: " + computerScoreHistory.join(', ');
}

function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateScore() {
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

function updateHistory() {
  playerScoreHistory.push(playerResult);
  computerScoreHistory.push(computerResult);
  playerHistory.innerHTML = "Player: " + playerScoreHistory.join(', ');
  computerHistory.innerHTML = "Computer: " + computerScoreHistory.join(', ');

  // Save the updated history to cookies
  saveAsCookie();
}

function playARound() {
  playerResult = throwDice();
  playerScore.innerHTML = playerResult;
  computerResult = throwDice();
  computerScore.innerHTML = computerResult;
  updateScore();
  updateHistory();
}

dice.addEventListener('click', playARound);

// Function to save score history as cookies
function saveAsCookie() {
  document.cookie = "playerScoreHistory=" + playerScoreHistory + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "computerScoreHistory=" + computerScoreHistory + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
}

// Function to get cookie by name
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

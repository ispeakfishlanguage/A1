# Throw the dice
Here's a quick explanation of how the code works:

## Dice Rolling:

`throwDice()` generates a random number (1–6) for both the player and the computer.
The results are displayed on the screen via `playerScore` and `computerScore`.

## Score Update:

`updateScore()` compares the player's and computer's dice results, updating the win/loss/tie counters and displaying the result on the page.

## History Update:

`updateHistory()` stores each player's and computer's dice result in their respective arrays (`playerScoreHistory`, `computerScoreHistory`), updates the history on the screen, and calls `saveAsCookie()` to save these arrays as cookies.

## Saving Cookies:

`saveAsCookie()` saves the score histories as cookies using the arrays and sets an expiration date for them.

## Retrieving Cookies:

When the page loads, `getCookie()` checks if the cookies exist. If they do, it splits the cookie strings into arrays and displays the previous game results.

## Game Flow:

When you click the button (`dice.addEventListener`), it plays a round, updates the score, and saves the updated history.

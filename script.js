var computerChoice = 0
var playerSelection = prompt('rock,paper,scissors?')
var playerScore = 0
var cpuScore = 0
var result = ''
var gameResult = ''

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    console.log(1, computerChoice);
    if (computerChoice == 0) {
        computerChoice = 'ROCK';
        console.log(2, computerChoice);

    } if (computerChoice == 1) {
        computerChoice = 'PAPER';
        console.log(2, computerChoice);
    } if (computerChoice == 2) {
        computerChoice = 'SCISSORS';
        console.log(2, computerChoice);
    }
    return computerChoice;
}


function readyFight (playerSelection, computerChoice) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerChoice) {
        result = 'Tie';
    } else if ((playerSelection == 'ROCK' && computerChoice =='SCISSORS') ||
            (playerSelection == 'PAPER' && computerChoice == 'ROCK') ||
            (playerSelection == 'SCISSORS' && computerChoice == 'PAPER')) {
        result = 'winner';
    } else {result = 'loser'}
    console.log(3, result);
    return result;
    }



function game (n) {
    for (var i = 0; i < n; ++i) {
        readyFight(playerSelection, getComputerChoice());
        if (result == 'winner') {
            playerScore = ++playerScore;
        } else if (result == 'loser') {
            cpuScore = ++cpuScore;
        }
        console.log(4, playerScore);
        console.log(5, cpuScore);
    }
    if (playerScore > cpuScore) {
        gameResult = 'You win'
    } else { gameResult = 'You lose'}
    console.log(6, gameResult);
}
game(5)
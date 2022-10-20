var computerChoice = 0
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice == 0) {
        computerChoice = 'ROCK';
        console.log(computerChoice);

    } if (computerChoice == 1) {
        computerChoice = 'PAPER';
        console.log(computerChoice);
    } if (computerChoice == 2) {
        computerChoice = 'SCISSORS';
        console.log(computerChoice);
    }
    return computerChoice;
}
getComputerChoice()
var result = ''
function readyFight (playerSelection, computerChoice) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerChoice) {
        result = 'Tie';
    } else if ((playerSelection == 'ROCK' && computerChoice =='SCISSORS') ||
            (playerSelection == 'PAPER' && computerChoice == 'ROCK') ||
            (playerSelection == 'SCISSORS' && computerChoice == 'PAPER')) {
        result = 'winner';
    } else {result = 'loser';}
    console.log(result)
    return result
    }
readyFight('paper', computerChoice)
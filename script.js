var computerChoice = 0
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    console.log(computerChoice)
    if (computerChoice == 0) {
        computerChoice = 'ROCK'
        console.log(computerChoice)

    } if (computerChoice == 1) {
        computerChoice = 'PAPER'
        console.log(computerChoice)
    } if (computerChoice == 2) {
        computerChoice = 'SCISSORS'
        console.log(computerChoice)
    }
    return computerChoice
}
getComputerChoice()
var result = ''
function readyFight (playerSelection, computerChoice) {
    playerSelection.toUpperCase()
    if (playerSelection == computerChoice) {
        result = 'Tie'
        else if (playerSelection == 'ROCK' && computerChoice =='SCISSORS') || (playerSelection == 'PAPER' && computerChoice == 'ROCK' || (playerSelection = 'SCISSORS' && computerChoice == 'PAPER')

    }
}
readyFight('ROCK', computerChoice)

//console.log(getComputerChoice());

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        //playerLost(playerSelection, computerSelection);
        return playerLost(playerSelection, computerSelection)
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        //playerWon(playerSelection, computerSelection);
        return playerWon(playerSelection, computerSelection)
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        //playerWon(playerSelection, computerSelection);
        return playerWon(playerSelection, computerSelection)
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        //playerLost(playerSelection, computerSelection);
        return playerLost(playerSelection, computerSelection)
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        //playerLost(playerSelection, computerSelection);
        return playerLost(playerSelection, computerSelection)
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        //playerWon(playerSelection, computerSelection);
        return playerWon(playerSelection, computerSelection)
    }
}

function getPlayerChoice() {
    console.log("Select your choice: 1-Rock, 2-Paper, 3-Scissors");
    let selectedNumber = parseInt(prompt("Select your number"));
    if (selectedNumber == 1) {
        return "Rock"
    } else if (selectedNumber == 2) {
        return "Paper"
    } else if (selectedNumber == 3) {
        return "Scissors"
    } else {
        console.log("You entered wrong number");
        return "wrong number"
    }
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

function playerWon(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`
}

function playerLost(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}`
}
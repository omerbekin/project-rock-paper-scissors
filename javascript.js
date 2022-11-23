
//console.log(getComputerChoice());

let playerScore = 0;
let computerScore = 0;

game();

function game(playerSelection, computerSelection) {
    let totalRound = 5;
    for (let round = 0; round < totalRound; round++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Final score -> You ${playerScore} - Computer ${computerScore}`);
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {

        return playerLost(playerSelection, computerSelection)
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {

        return playerWon(playerSelection, computerSelection)
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {

        return playerWon(playerSelection, computerSelection)
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {

        return playerLost(playerSelection, computerSelection)
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {

        return playerLost(playerSelection, computerSelection)
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {

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
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}\nScore -> You: ${playerScore} - Computer: ${computerScore}`
}

function playerLost(playerSelection, computerSelection) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}\nScore -> You: ${playerScore} - Computer: ${computerScore}`
}
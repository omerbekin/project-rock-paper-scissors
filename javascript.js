
//console.log(getComputerChoice());
playOneTurn();


function playOneTurn(playerChoice, computerChoice) {
    playerChoice = playerSelection();
    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        playerLoseLog(playerChoice, computerChoice);
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        playerWinLog(playerChoice, computerChoice);
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        playerWinLog(playerChoice, computerChoice);
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        playerLoseLog(playerChoice, computerChoice);
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        playerLoseLog(playerChoice, computerChoice);
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        playerWinLog(playerChoice, computerChoice);
    }
}

function playerSelection() {
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

function playerWinLog(playerChoice, computerChoice) {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
}

function playerLoseLog(playerChoice, computerChoice) {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
}
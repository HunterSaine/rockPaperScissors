// ask user how many
//amountOfRounds = prompt("How many rounds do you want to play?");

// get input from user. Can be either rock, paper, or scissors = playerSelecetion
function getPlayerSelection() { let playerSelection = prompt("Type 'rock' 'paper' 'scissors'"); }

// have computer randomly choose rock, paper, or scissors
let computerChoices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let randomSelection = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomSelection];
}
let computerSelection = getComputerChoice();
// compare users input with computers input
 //if playerSelection === computerSelection
    // its a draw
let playerWins = 0;
let computerWins = 0;
function playRound()  { 
let computerSelection = getComputerChoice();
let playerSelection = prompt("Select rock, paper, or scissors");
playerSelection = playerSelection.toLowerCase()
    console.log(`Player selects ${playerSelection}. Computer selects ${computerSelection}`)
if ( playerSelection === computerSelection) {
    console.log("This round is  a Draw");
    return;
}
else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection ==="scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
    console.log("Player Loses Round!");
    return computerWins++ 
}
else if((playerSelection !== "rock" || "paper" || "scissors")) {
    console.log("Not a valid input")
    return;
}
else { console.log("Player Wins Round")};
    return playerWins++

}
//else if playerSelection === rock && computerSelection = paper
    //or playerSelection === paper && computerSelection ===scissors
    //or playerSelection === scissors && computerSelection === rock
    // player loses

// else player wins

//if player wins, add tally to players score
function playGame() {
    let amountOfRounds = prompt("How many Rounds?")
    for (let i = 0; i < amountOfRounds; i++){
        playRound();
        console.log(`Player Wins = ${playerWins}`)
        console.log(`Computer Wins = ${computerWins}`);
        
    }
    if (playerWins > computerWins) {
        console.log("Congrats! Player Wins the Game!")
        return "Congrats! You win"
    }
    else if (playerWins < computerWins) {
        console.log("Oooofff, You lose!")
        return "oooofff, you lose!"
    }
    else if (playerWins === computerWins) {
        console.log("This game is a tie. Run it back.")
        return "This game is a tie"
    }
}
//if computer wins, add tally to computers score

//
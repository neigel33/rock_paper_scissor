// computer randomly chooses between rock, paper, or scissors
getcomputerChoice = () => {
    let choice = ['rock', 'paper', 'scissors'];
    const computerSelection = Math.floor(Math.random() * choice.length);
    console.log(computerSelection, choice[computerSelection]);
    return choice[computerSelection];
}

// player chooses between rock, paper, or scissors
getHumanChoice = () => {
    let humanSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    console.log(humanSelection);
    return humanSelection;
}

// score variables 
var playerscore = 0;
var computerScore = 0;

const pick = {
    rock: { weakTo: 'paper', strongTo: 'scissors' },
    paper: { weakTo: 'scissors', strongTo: 'rock' },
    scissors: { weakTo: 'rock', strongTo: 'paper' }
}

function playRound(humanSelection, computerSelection) {
    if (pick[humanSelection].strongTo === computerSelection) {
        playerscore++;
        return "You win! " + humanSelection + " beats " + computerSelection;
    } else if (pick[humanSelection].weakTo === computerSelection) {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + humanSelection;
    } else {
        return "It's a tie!";
    }
}

// entire game logic
function playgame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getcomputerChoice();
        let result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log(`Your score: ${playerscore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    winner();
}

// Define the winner function
function winner() {
    if (playerscore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > playerscore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playgame();
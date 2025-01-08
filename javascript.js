// computer randomly chooses between rock, paper, or scissors
const getcomputerChoice = () => {
    let choice = ['rock', 'paper', 'scissors'];
    const computerSelection = Math.floor(Math.random() * choice.length);
    return choice[computerSelection];
}

// score variables 
let playerscore = 0;
let computerScore = 0;

const pick = {
    rock: { weakTo: 'paper', strongTo: 'scissors' },
    paper: { weakTo: 'scissors', strongTo: 'rock' },
    scissors: { weakTo: 'rock', strongTo: 'paper' }
}

function playRound(humanSelection, computerSelection) {
    if (pick[humanSelection].strongTo === computerSelection) {
        playerscore++;
        return `You win! ${humanSelection} beats ${computerSelection}`;
    } else if (pick[humanSelection].weakTo === computerSelection) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}`;
    } else {
        return "It's a tie!";
    }
}

function updateScore() {
    document.getElementById('player-score').textContent = `Player Score: ${playerscore}`;
    document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;
}

function checkWinner() {
    if (playerscore === 5) {
        document.getElementById('result').textContent = "You are the overall winner!";
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = "The computer is the overall winner!";
        resetGame();
    }
}

function resetGame() {
    playerscore = 0;
    computerScore = 0;
    updateScore();
}

document.getElementById('rock').addEventListener('click', () => {
    const computerSelection = getcomputerChoice();
    const result = playRound('rock', computerSelection);
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('paper').addEventListener('click', () => {
    const computerSelection = getcomputerChoice();
    const result = playRound('paper', computerSelection);
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('scissors').addEventListener('click', () => {
    const computerSelection = getcomputerChoice();
    const result = playRound('scissors', computerSelection);
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});
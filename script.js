// define scores
let playerScore = 0; 
let computerScore = 0;

// define game conditions
const win = 'You won this round';
const lose = 'You lost this round';
const tie = 'This round is a tie';

const playerChoice = playerSelection();

function getComputerChoice() {
    let options = Array('rock', 'paper', 'scissors');
    // Choose rock paper or scissors randomly from array.
    computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
}

function playerSelection() {
    let choice = prompt('Rock, paper, or scissors? ').toLowerCase();
    console.log(`You chose: ${choice}`);
    return choice;
}
// Play a single round and determine the winner of that round.
function playRound(playerChoice) {
    let computerPlay = getComputerChoice();
    let result;

    if (playerChoice === computerPlay) {
        result = tie;
        return result;
    } else if (playerChoice === 'rock') {
        if (computerPlay === 'paper') {
            result = lose;
            computerScore++;
            return result;
        } else {
            result = win;
            playerScore++;
            return result;
        }
    } else if (playerChoice === 'paper') {
        if (computerPlay === 'rock') {
            result = win;
            playerScore++;
            return result;
        } else {
            result = lose;
            computerScore++;
            return result;
        }
    } else if (playerChoice === 'scissors') {
        if (computerPlay === 'paper') {
            result = win;
            playerScore++;
            return result;
        } else {
            result = lose;
            computerScore++;
            return result;
        }
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = playerSelection();
        const currentRound = playRound(playerChoice);

        console.log(currentRound);
    }
}

console.log(game());

console.log(`You won ${playerScore} rounds and lost ${computerScore} rounds.`);
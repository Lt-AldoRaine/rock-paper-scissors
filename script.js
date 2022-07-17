
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
        result = 'Tie';
        return result;
    } else if (playerChoice === 'rock') {
        if (computerPlay === 'paper') {
            result = 'Lose';
            return result;
        } else {
            result = 'Win';
            return result;
        }
    } else if (playerChoice === 'paper') {
        if (computerPlay === 'rock') {
            result = 'Win';
            return result;
        } else {
            result = 'Lose';
            return result;
        }
    } else if (playerChoice === 'scissors') {
        if (computerPlay === 'paper') {
            result = 'Win';
            return result;
        } else {
            result = 'Lose';
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



const playerChoice = playerSelection();
console.log(game());
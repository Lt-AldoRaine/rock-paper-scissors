const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const container = document.querySelector('#container');
const winnerContainer = document.querySelector('#winner')

const win = 'You win the game!';
const lose = 'You lost to a computer. :(';
const tie = 'The game is a tie';

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const computerChoice = () => {
    const rps = [{choice: 'rock', value : 0}, {choice: 'paper', value: 1}, {choice: 'scissors', value: 2}];
    const choice = rps[Math.floor(Math.random() * rps.length)];
    return choice;
};

const playerChoice = () => {
    let choice;

    if (choice = clickRock()) {
        return 0;
    } else if (choice = clickPaper()) {
        return 1;
    } else if (choice = clickScissors()) {
        return 2;
    }
};

function clickRock() {
    rock.addEventListener('click', (e) => {
        console.log('You chose rock')
        e.stopPropagation();
    }, { once: true });

};

function clickPaper() {
    paper.addEventListener('click', (e) => {
        console.log('You chose paper');
        e.stopPropagation();
        return 'paper'
    }, { once: true });
};

function clickScissors() {
    scissors.addEventListener('click', (e) => {
        console.log('You chose scissors');
        e.stopPropagation();
    }, { once: true });
};

const getWinner = () => {
    if (playerScore === computerScore) {
        return tie;
    }
}


function playRound() {
    let computerPlay = computerChoice();
    let player = playerChoice();

    if (player === computerPlay) {
        tieScore++;
        container.append(`${playerScore} to ${computerScore}`)
    } else if (player === 'rock') {
        if (computerPlay === 'paper') {
            computerScore++;
            container.append(`${playerScore} to ${computerScore}`)
        } else {
            playerScore++;
            container.append(`${playerScore} to ${computerScore}`)
        }
    } else if (player === 'paper') {
        if (computerPlay === 'rock') {
            playerScore++;
            container.append(`${playerScore} to ${computerScore}`)
        } else {
            computerScore++;
            container.append(`${playerScore} to ${computerScore}`)
        }
    } else if (player === 'scissors') {
        if (computerPlay === 'paper') {
            playerScore++;
            container.append(`${playerScore} to ${computerScore}`)
        } else {
            computerScore++;
            container.append(`${playerScore} to ${computerScore}`)
        }
    }
    getWinner();
}



playRound();
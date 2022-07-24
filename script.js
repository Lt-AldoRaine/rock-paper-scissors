const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const container = document.querySelector('#container');

const win = 'You won this round';
const lose = 'You lost this round';
const tie = 'You tied this round';


const computerChoice = () => {
    const rps = ['rock', 'paper', 'scissors'];
    const choice = rps[Math.floor(Math.random() * rps.length)];
    return `Computer chooses ${choice}`;
};

const playerChoice = () => {
    let choice;

    if (choice = clickRock()) {
        return 'rock'
    } else return 'Please choose.'
};

function clickRock() {
    rock.addEventListener('click', () => {
        console.log('You chose rock')
    });
};

function clickPaper() {
    rock.addEventListener('click', () => {
        console.log(`You chose paper`);
        return 'paper'
    });
};

function clickScissors() {
    rock.addEventListener('click', () => {
        console.log(`You chose scissors`);
        return 'scissors'
    });
};


console.log(playerChoice())
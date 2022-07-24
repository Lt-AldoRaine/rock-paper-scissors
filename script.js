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
        return 'rock';
    } else if (choice = clickPaper()) {
        return 'paper';
    } else if (choice = clickScissors()) {
        return 'scissors';
    } else return 'Please choose';
};

function clickRock() {
    rock.addEventListener('click', (e) => {
        console.log('You chose rock')
        e.stopPropagation();
    }, {capture: true});
    
};

function clickPaper() {
    paper.addEventListener('click', (e) => {
        console.log('You chose paper');
        e.stopPropagation();
    });
};

function clickScissors() {
    scissors.addEventListener('click', (e) => {
        console.log('You chose scissors');
        e.stopPropagation();
    });
};


console.log(playerChoice())
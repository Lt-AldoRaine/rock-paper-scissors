const choiceButton = document.querySelectorAll('[data-choice]')
const container = document.querySelector('#container');
const winnerContainer = document.querySelector('#winner')
const selections = document.querySelector('#selections')
const CHOICES = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'scissors', 
        beats: 'paper'
    },
    {
        name: 'paper', 
        beats: 'rock'
    }
];

const win = 'You win the game!';
const lose = 'You lost to a computer. :(';
const tie = 'The game is a tie';

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let playerChoice;


choiceButton.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.choice;
        const choice = CHOICES.find(choice => choice.name === choiceName)
        playRound(choice)
    })
})

function getChoiceResult(choice, winner) {

}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[computerChoice]
}

function getWinner(choice, computerChoice) {
    return choice.beats === computerChoice.name;
}


function playRound(choice) {
    const computerChoice = getComputerChoice;
    const youWin = getWinner(choice, computerChoice);
    const computerWin = getWinner(computerChoice, choice);

    getChoiceResult(computerChoice, computerWin)
    getChoiceResult(choice, youWin)
}

const choiceButton = document.querySelectorAll('[data-choice]')
const finalColumn = document.querySelector('[data-final-column')
const computerScore = document.querySelector('[data-computer-score]')
const playerScore = document.querySelector('[data-player-score]')
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

choiceButton.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        const choiceName = choiceButton.dataset.choice;
        const choice = CHOICES.find(choice => choice.name === choiceName)
        playRound(choice)
    })
})

function playRound(choice) {
    const computerChoice = getComputerChoice();
    const youWin = getWinner(choice, computerChoice);
    const computerWin = getWinner(computerChoice, choice);

    getChoiceResult(computerChoice, computerWin)
    getChoiceResult(choice, youWin)

    if (youWin) incrementScore(playerScore);
    if (computerWin) incrementScore(computerScore);
}

function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1
}

function getChoiceResult(choice, winner) {
    const div = document.createElement('div')
    div.innerText = choice.name
    div.classList.add('result-choice');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[computerChoice]
}

function getWinner(choice, opponentChoice) {
    return choice.beats === opponentChoice.name;
}




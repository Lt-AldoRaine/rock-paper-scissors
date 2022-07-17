let playerSelection;

function getComputerChoice() {
    const array = Array('rock', 'paper', 'scissors')
    // Randomly pick rock, paper, or scissors from the array.
    let choice = array[Math.floor(Math.random() * array.length)]
    console.log(choice);
}

function playRound(playerSelection, getComputerChoice) {

}
getComputerChoice();
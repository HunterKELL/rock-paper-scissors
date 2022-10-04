//Variables
let playerScore = 0
let comScore = 0

const fireBtn = document.querySelector('.fire');
const grassBtn = document.querySelector('.grass');
const waterBtn = document.querySelector('.water');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const comScoreSpan = document.querySelector('.com-score');
const reset = document.querySelector('.reset');

//Function to select a value at random
const computerPlay = () => {
    const arrOfChoices = ['Fire', 'Grass', 'Water']
    const randomNum = Math.floor(Math.random() * 3)
    console.log(arrOfChoices[randomNum])
    return arrOfChoices[randomNum] 
} 

// Main Game Function
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const pHeader = document.createElement('h2');
        pHeader.innerText = `You both chose ${playerSelection}`;
        outcomeDiv.appendChild(pHeader);
    } else if (playerSelection === 'Fire' && computerSelection === 'Water') {
        comScore++
        const pHeader = document.createElement('h2');
        pHeader.innerText = 'You lost! Fire was extinguished by Water';
        outcomeDiv.appendChild(pHeader);
    } else if (playerSelection === 'Fire' && computerSelection === 'Grass') {
        playerScore++
        const pHeader = document.createElement('h2');
        pHeader.innerText = 'You won! Fire burned Grass';
        outcomeDiv.appendChild(pHeader);
    } else if (playerSelection === 'Grass' && computerSelection === 'Fire') {
        comScore++
        const pHeader = document.createElement('h2');
        pHeader.innerText = 'You lost! Grass was burned by Fire';
        outcomeDiv.appendChild(pHeader);
    } else if (playerSelection === 'Grass' && computerSelection === 'Water') {
        playerScore++
        const pHeader = document.createElement('h2');
        pHeader.innerText = 'You won! Grass absorbed all the Water';
        outcomeDiv.appendChild(pHeader);
    } else if (playerSelection === 'Water' && computerSelection === 'Grass') {
        comScore++
        const pHeader = document.createElement('h2');
        pHeader.innerText = 'You lost! Water was absorbed by Grass';
        outcomeDiv.appendChild(pHeader);
    } else if (playerSelection === 'Water' && computerSelection === 'Fire') {
        playerScore++
        const pHeader = document.createElement('h2');
        pHeader.innerText = 'You won! Water extinguished the Fire';
        outcomeDiv.appendChild(pHeader);
    }
}

//Function for checking score
const checkForWinner = (playerScore, comScore) => {
    if (playerScore === 5) {
        const h1 = document.createElement('h1')
        h1.classList.add('player-won')
        h1.innerText = 'You won, master of the elements!'
        outcomeDiv.appendChild(h1)
    } else if (comScore === 5) {
        const h1 = document.createElement('h1')
        h1.classList.add('com-won')
        h1.innerText = 'You lost, need more training.'
        outcomeDiv.appendChild(h1)
    }
}
// Game Result Function 
const scoreResults = (playerScore, comScore) => {
    playerScoreSpan.innerText = `${playerScore}`
    comScoreSpan.innerText = `${comScore}`
}

//Event Listeners for buttons
fireBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Fire';
    playRound(playerSelection, computerSelection);
    scoreResults(playerScore, comScore);
    checkForWinner(playerScore, comScore);
});

grassBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Grass';
    playRound(playerSelection, computerSelection);
    scoreResults(playerScore, comScore);
    checkForWinner(playerScore, comScore);
});

waterBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Water';
    playRound(playerSelection, computerSelection);
    scoreResults(playerScore, comScore);
    checkForWinner(playerScore, comScore);
});

//const game = () => {
    //for (let i = 0; i < 5; i++) {
    //    const playerSelection = prompt('Choose your Hand', 'Rock Paper Scissors').toLowerCase()
    //    const computerSelection = computerPlay()
    //    playRound(playerSelection, computerSelection);
    //}

//    if (playerScore > comScore) {
//        return 'Congragulations, Youve won!'
//    } else if (playerScore < comScore) {
//       'Youve lost, Bummer'
//    } else {
//        return 'Wow, you guys ended in a tie.'
//    }
//}


//console.log(game());
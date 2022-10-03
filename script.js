//Variables
let playerScore = 0
let comScore = 0

const fireBtn = document.querySelector('.fire');
const grassBtn = document.querySelector('.grass');
const waterBtn = document.querySelector('.water');
const outcomeDiv = document.querySelector('.outcome');
console.log(outcomeDiv);

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
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = 'You won, Master of the Elements'
        outcomeDiv.appendChild(h2)
    } else if (comScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('com-won')
        h2.innerText = 'You lost, Need more training.'
        outcomeDiv.appendChild(h2)
    }
}

//Event Listener for buttons
fireBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Fire';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, comScore);
});

grassBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Grass';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, comScore);
});

waterBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Water';
    playRound(playerSelection, computerSelection);
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
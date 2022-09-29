//Variables
let playerScore = 0
let comScore = 0

const fireBtn = document.querySelector('.fire');
const grassBtn = document.querySelector('.grass');
const waterBtn = document.querySelector('.water');
const outcome = document.querySelector('.outcome');

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
        const p = document.createElement('p');
        p.innerText = `You both chose ${playerSelection}`;
        outcome.appendChild(p);
    } else if (playerSelection === 'Fire' && computerSelection === 'Water') {
        comScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! Fire was extinguished by Water';
        outcome.appendChild(p);
    } else if (playerSelection === 'Fire' && computerSelection === 'Grass') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You won! Fire burned Grass';
        outcome.appendChild(p);
    } else if (playerSelection === 'Grass' && computerSelection === 'Fire') {
        comScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! Grass was burned by Fire';
        outcome.appendChild(p);
    } else if (playerSelection === 'Grass' && computerSelection === 'Water') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You won! Grass absorbed all the Water';
        outcome.appendChild(p);
    } else if (playerSelection === 'Water' && computerSelection === 'Grass') {
        comScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! Water was absorbed by Grass';
        outcome.appendChild(p);
    } else if (playerSelection === 'Water' && computerSelection === 'Fire') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You won! Water extinguished the Fire';
        outcome.appendChild(p);
    }
}

//Function for checking score
const checkForWinner = (playerScore, comScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = 'You won, Master of the Elements'
        outcome.appendChild(h2)
    } else if (comScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('com-won')
        h2.innerText = 'You lost, need more training.'
        outcome.appendChild(h2)
    }
}

//Event Listener
fireBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerScore = 'fire';
    playRound(playerScore, computerSelection);
    checkForWinner(playerScore, comScore);
});

grassBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerScore = 'grass';
    playRound(playerScore, computerSelection);
    checkForWinner(playerScore, comScore);
});

waterBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerScore = 'water';
    playRound(playerScore, computerSelection);
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
let playerScore = 0
let comScore = 0

const computerPlay = () => {
    const arrOfChoices = ['Fire', 'Grass', 'Water']
    const randomNum = Math.floor(Math.random() * 3)
    console.log(arrOfChoices[randomNum])
    const comChoice = arrOfChoices[randomNum]
    return comChoice
} 

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'Fire' && computerSelection === 'Fire') {
        return 'You both chose Fire!'
    } else if (playerSelection === 'Grass' && computerSelection === 'Grass') {
        return 'You both chose Grass!'
    } else if (playerSelection === 'Water' && computerSelection === 'Water') {
        return 'You both chose Water!'
    } else if (playerSelection === 'Fire' && computerSelection === 'Water') {
        comScore++
        return 'You lost! Fire was extinguished by Water'
    } else if (playerSelection === 'Fire' && computerSelection === 'Grass') {
        playerScore++
        return 'You won! Fire burned Grass'
    } else if (playerSelection === 'Grass' && computerSelection === 'Fire') {
        comScore++
        return 'You lost! Grass was burned by Fire'
    } else if (playerSelection === 'Grass' && computerSelection === 'Water') {
        playerScore++
        return 'You won! Grass absorbed all the Water'
    } else if (playerSelection === 'Water' && computerSelection === 'Grass') {
        comScore++
        return 'You lost! Water was absorbed by Grass'
    } else if (playerSelection === 'Water' && computerSelection === 'Fire') {
        playerScore++
        return 'You won! Water extinguished the Fire'
    }
}

const game = () => {
    //for (let i = 0; i < 5; i++) {
    //    const playerSelection = prompt('Choose your Hand', 'Rock Paper Scissors').toLowerCase()
    //    const computerSelection = computerPlay()
    //    playRound(playerSelection, computerSelection);
    //}

    if (playerScore > comScore) {
        return 'Congragulations, Youve won!'
    } else if (playerScore < comScore) {
        'Youve lost, Bummer'
    } else {
        return 'Wow, you guys ended in a tie.'
    }
}


console.log(game());
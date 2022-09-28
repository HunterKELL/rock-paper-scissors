let playerScore = 0
let comScore = 0

const computerPlay = () => {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random() * 3)
    console.log(arrOfChoices[randomNum])
    const comChoice = arrOfChoices[randomNum]
    return comChoice
} 

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'You both chose Rock!'
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'You both chose Paper!'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'You both chose Scissors!'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        comScore++
        return 'You lost! Your rock was eaten by paper'
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++
        return 'You won! Your rock crushed scissors'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        comScore++
        return 'You lost! Your paper was shred to pieces by scissors'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++
        return 'You won! Your paper ate rock'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        comScore++
        return 'You lost! Your scissors was crushed by rock'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++
        return 'You won! Your scissors shred paper'
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your Hand', 'Rock Paper Scissors').toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > comScore) {
        return 'Congragulations, Youve won!'
    } else if (playerScore < comScore) {
        'Youve lost, Bummer'
    } else {
        return 'Wow, you guys ended in a tie.'
    }
}


console.log(game());
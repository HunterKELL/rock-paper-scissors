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
        return 'You lost! Your rock was eaten by paper'
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You won! Your rock crushed scissors'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lost! Your paper was shred to pieces by scissors'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You won! Your paper ate rock'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lost! Your scissors was crushed by rock'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You won! Your scissors shred paper'
    }
}

const playerSelection = 'Rock';
const computerSelection = computerPlay()

const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
function getComputerChoice() {
    const randValue = Math.random() * 100
    if (randValue < 34) {
        return 'rock'
    }else if (randValue < 67) {
        return 'paper'
    }else if (randValue < 100) {
        return 'scissors'
    }
    return null
}

function playRound(playerSelection, computerSelection) {
    playerTemp = playerSelection.toLowerCase();
    computerTemp = computerSelection.toLowerCase();
    playerWins = 0;
    computerWins = 0;

    if (playerTemp == 'rock' && computerTemp == 'scissors') {
        playerWins++;
        return "You Win! Rock beats scissors"
    }else if (playerTemp == 'paper' && computerTemp == 'rock') {
        playerWins++;
        return "You Win! Paper beats rock"
    }else if (playerTemp == 'scissors' && computerTemp == 'paper') {
        playerWins++;
        return "You Win! Scissors beats paper"
    }else if (computerTemp == 'rock' && playerTemp == 'scissors') {
        computerWins++;
        return "You Lose! Rock beats scissors"
    }else if (computerTemp == 'paper' && playerTemp == 'rock') {
        computerWins++;
        return "You Lose! Paper beats rock"
    }else if (computerTemp == 'scissors' && playerTemp == 'paper') {
        computerWins++;
        return "You Lose! Scissors beats paper"
    }else if (computerTemp == playerTemp) {
        computerWins++;
        return ("Draw! Both selected " + computerTemp)
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?')
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        // console.log(playerSelection)
    }
    /*
    if (computerWins > playerWins) {
        console.log(computerWins);
        console.log(playerWins);
    }else if (playerWins > computerWins) {
        console.log(playerWins);
        console.log(computerWins);
    }else {
        console.log(playerWins);
        console.log(computerWins);
        console.log('Draw!');
    }
    */
}

game()


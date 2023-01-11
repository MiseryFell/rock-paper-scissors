









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

    if (playerTemp == 'rock' && computerTemp == 'scissors') {
        return [true, playerTemp, computerTemp]
    }else if (playerTemp == 'paper' && computerTemp == 'rock') {
        return [true, playerTemp, computerTemp]
    }else if (playerTemp == 'scissors' && computerTemp == 'paper') {
        return [true, playerTemp, computerTemp]
    }else if (computerTemp == 'rock' && playerTemp == 'scissors') {
        return [false, playerTemp, computerTemp]
    }else if (computerTemp == 'paper' && playerTemp == 'rock') {
        return [false, playerTemp, computerTemp]
    }else if (computerTemp == 'scissors' && playerTemp == 'paper') {
        return [false, playerTemp, computerTemp]
    }else if (computerTemp == playerTemp) {
        return null
    }
}







    



const rockID = document.querySelector("#rock");
const paperID = document.querySelector("#paper");
const scissorsID = document.querySelector("#scissors");







function displayOutcome() {
    console.log("nice")
}


function rock() {
    playRound('rock', getComputerChoice());
}

function paper() {
    playRound('paper', getComputerChoice());
}

function scissors() {
    playRound('scissors', getComputerChoice());
}



rockID.addEventListener('click', rock());

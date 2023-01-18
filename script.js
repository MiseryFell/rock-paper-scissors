// Randomly calculates an outcome for the computer player

function getComputerChoice() {
    const randValue = Math.random() * 100
    if (randValue < 34) {
        return 'rock'
    } else if (randValue < 67) {
        return 'paper'
    } else if (randValue < 100) {
        return 'scissors'
    }
    return null
}

// Uses getComputerChoice() and player input 

function playRound(playerSelection, computerSelection) {
    playerTemp = playerSelection.toLowerCase();
    computerTemp = computerSelection.toLowerCase();

    if ((playerTemp == 'rock' && computerTemp == 'scissors') || 
    (playerTemp == 'paper' && computerTemp == 'rock') || 
    (playerTemp == 'scissors' && computerTemp == 'paper')) {
        return [1, playerTemp, computerTemp]
    } else if (computerTemp == 'rock' && playerTemp == 'scissors' || 
    (computerTemp == 'paper' && playerTemp == 'rock') || 
    (computerTemp == 'scissors' && playerTemp == 'paper')) {
        return [2, playerTemp, computerTemp]
    } else if (computerTemp == playerTemp) {
        return [3, playerTemp, computerTemp]
    }
}

// Creates Element Selectors   

const rockReference = document.getElementById('rock');
const paperReference = document.getElementById('paper');
const scissorsReference = document.getElementById('scissors');
const gameWrapper = document.getElementById('game-wrapper');
const body = document.getElementById('parent');

// 


playerWins = 0;
computerWins = 0;









rockReference.addEventListener('click', () => {
    let outcome = playRound('rock', getComputerChoice());
    console.log('rock');
    if (outcome[0] == 1) {
        playerWins++;
    } else if (outcome[0] == 2) {
        computerWins++;
    }
    console.log(playerWins);
    console.log(computerWins);
    checkWins();
});



paperReference.addEventListener('click', () => {
    let outcome = playRound('paper', getComputerChoice());
    console.log('paper');
    if (outcome[0] == 1) {
        playerWins++;
    } else if (outcome[0] == 2) {
        computerWins++;
    }
    console.log(playerWins);
    console.log(computerWins);
    checkWins();
});



scissorsReference.addEventListener('click', () => {
    let outcome = playRound('scissors', getComputerChoice());
    console.log('scissors');
    if (outcome[0] == 1) {
        playerWins++;
    } else if (outcome[0] == 2) {
        computerWins++;
    }
    console.log(playerWins);
    console.log(computerWins);
    checkWins();
});


// Handles ending of match and UI changes


const endingWrapper = document.createElement('div');
const textBox = document.createElement('div');
const mainBoxText = document.createElement('div');
const boxButtons = document.createElement('div');
const restartButton = document.createElement('btn');
const endButton = document.createElement('btn');

endingWrapper.setAttribute('class', 'wrapper');
textBox.setAttribute('class', 'text-box');
mainBoxText.setAttribute('id', 'main-box-text');
boxButtons.setAttribute('id', 'text-box-buttons');
restartButton.setAttribute('class', 'text-box-button');
endButton.setAttribute('class', 'text-box-button');

endingWrapper.appendChild(textBox);
textBox.appendChild(mainBoxText);
textBox.appendChild(boxButtons);
boxButtons.appendChild(restartButton);
boxButtons.appendChild(endButton);

restartButton.textContent = "Restart?";
endButton.textContent = "I give up...";



function checkWins() {
    if (playerWins >= 5) {
        console.log("player win");
        outcomeWin('Player');
    }
    
    if (computerWins >= 5) {
        console.log("computer win");
        outcomeWin('Computer');
    }
}


restartButton.addEventListener('click', () => {
    console.log('nice');
});


function outcomeWin(winner='null') {
    gameWrapper.remove();
    // body.removeChild(gameWrapper);
    let msToWait = 2000;
    setTimeout(() => {
        console.log('waited');
    }, msToWait);
    body.appendChild(endingWrapper);
    mainBoxText.textContent = `${winner} wins!`;
}


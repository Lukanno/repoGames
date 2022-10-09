function playRoundRock(computerSelection) {
    const stringOne = 'Draw! Play again';
    const stringTwo = 'You Lose! Paper beats Rock';
    const stringThree = 'You Win! Rock beats Scissors';
    
    if(computerSelection === 'rock') {
        return h2Third.textContent = stringOne;
    } else if(computerSelection === 'paper') {
        computerScore++;
        boxComputer.textContent = computerScore;
        h2Third.textContent = stringTwo;
        if(computerScore === 5){
            let result = document.querySelector('.results h1');
            return result.textContent = 'Computer Winner! Refresh page to play again!';
        }
         
    } else if(computerSelection === 'scissors') {
        playerScore++;
        boxPlayer.textContent = playerScore;
        h2Third.textContent = stringThree;
        if(playerScore === 5){
            let result = document.querySelector('.results h1');
            return result.textContent = 'Player Winner! Refresh page to play again!';
        }
    }
    
}


function playRoundPaper(computerSelection) {
    const stringOne = 'Draw! Play again';
    const stringTwo = 'You Lose! Scissors beats Paper';
    const stringThree = 'You Win! Paper beats Rock';
    
    if(computerSelection === 'paper') {
        return h2Third.textContent = stringOne;
    } else if(computerSelection === 'scissors') {
        computerScore++;
        boxComputer.textContent = computerScore;
        h2Third.textContent = stringTwo;
        if(computerScore === 5){
            let result = document.querySelector('.results h1');
            return result.textContent = 'Computer Winner! Refresh page to play again!';
        }
    } else if(computerSelection === 'rock') {
        playerScore++;
        boxPlayer.textContent = playerScore;
        h2Third.textContent = stringThree;
        if(playerScore === 5){
            let result = document.querySelector('.results h1');
            return result.textContent = 'Player Winner! Refresh page to play again!';
        }
    }
    
}

function playRoundScissors(computerSelection) {
    
    const stringOne = 'Draw! Play again';
    const stringTwo = 'You Lose! Rock beats Scissors';
    const stringThree = 'Player Win! Scissors beats Paper';
    
    if(computerSelection === 'scissors') {
        return h2Third.textContent = stringOne;
    } else if(computerSelection === 'rock') {
        computerScore++;
        boxComputer.textContent = computerScore;
        h2Third.textContent = stringTwo;
        if(computerScore === 5){
            let result = document.querySelector('.results h1');
            return result.textContent = 'Computer Winner! Refresh page to play again!';
        }
    } else if(computerSelection === 'paper') {
        playerScore++;
        boxPlayer.textContent = playerScore;
        h2Third.textContent = stringThree;
        if(playerScore === 5){
            let result = document.querySelector('.results h1');
            return result.textContent = 'Player Winner! Refresh page to play again!';
        }
    }
    
}

function getComputerChoice() {
    let compPick = Math.floor(Math.random() * 3);
    var psr;
    //switch case to verify & return result
    switch (compPick) {
      case 0:
        psr = 'rock';
        break;
      case 1:
        psr = 'paper';
        break;
      case 2:
        psr = 'scissors';
        break;
    } //end switch 
    return psr;
}


var computerScore = 0;
var playerScore = 0;

let = boxComputer = document.getElementById('boxComputer');
let = boxPlayer = document.getElementById('boxPlayer');

let buttons = document.querySelectorAll('button');
let h2First = document.getElementById('first');
let h2Second = document.getElementById('second');
let h2Third = document.getElementById('third');

let h2Score = document.querySelector('.box h2');

buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        const clicked = e.target.textContent;
        const computerSelection = getComputerChoice();
        h2First.textContent = 'You choose: '+clicked;
        h2Second.textContent = 'Computer choose: '+computerSelection;
        if(clicked === 'Paper') {
            playRoundPaper(computerSelection);
        } else if(clicked === 'Rock') {
            playRoundRock(computerSelection);
        } else if(clicked === 'Scissors') {
            playRoundScissors(computerSelection);
        }
        
        
        let = scorep = document.getElementById('boxPlayer').textContent;
        let = scorec = document.getElementById('boxComputer').textContent;
        
        
        
        
    })
   
})


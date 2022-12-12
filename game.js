let userPoints = 0;
let computerPoints = 0;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const messageBoard = document.querySelector ('.result');
const scoreBoard = document.getElementById('scorer');


rockButton.addEventListener ('click', () =>{
    playRound('rock', computerPlay());
})
paperButton.addEventListener ('click', () =>{  
    playRound('paper', computerPlay());
})
scissorsButton.addEventListener ('click', () =>{
    playRound('scissors', computerPlay());
})

function updateScoreBoard(){
    scoreBoard.innerHTML = `${userPoints}:${computerPoints}`
}
function setActionMessage(message){
    messageBoard.innerHTML = message
}
function computerPlay () {
    const options = ['rock','paper','scissors']
    const index = Math.floor((Math.random() * 100) % 3)

    return options[index]
}

function resetScore(){
    userPoints=0
    computerPoints=0
}
function evaluateScore (){
    if(userPoints===5) {
        setActionMessage('You win the game. To start again choose an option')
        resetScore()
    } else if (computerPoints===5) {
        setActionMessage('You lose the game. To start again choose an option')
        resetScore()
    }
}
function playRound(playerSelection,computerSelection) {
    const roundResult = getRoundResult(playerSelection,computerSelection)
    if (roundResult.includes('Win')){
        userPoints++
    } else if (roundResult.includes('Lose')) {
        computerPoints++
    }
    setActionMessage(roundResult)
    updateScoreBoard()
    evaluateScore()
}
function getRoundResult(playerSelection, computerSelection ){
    switch (playerSelection) {
        case ('rock') : {
            switch (computerSelection) {
                case ('rock'): {
                    return "It's a Tie!";
                };
                case ('paper'): {
                    return 'You Lose! Paper beats Rock';
                };
                case ('scissors') : {
                    return 'You Win! Rock beats Scissors'
                }
            }
        };
        case ('paper') : {
            switch (computerSelection) {
                case ('rock'): {
                    return 'You Win! Paper beats Rock';
                };
                case ('paper'): {
                    return "It's a Tie!";
                };
                case ('scissors') : {
                    return 'You Lose! Scissors beat Paper'
                }
            }
            
        };
        case ('scissors') : {
            switch (computerSelection) {
                case ('rock'): {
                    return 'You Lose! Rock beats Scissors';
                };
                case ('paper'): {
                    return 'You Win! Scissors beat Paper';
                };
                case ('scissors') : {
                    return "It's a Tie!";
                }
            }
        }
        default: {
            return 'Incorrect option, please select one of Rock, Paper or Scissors'
        }
    }
}





























































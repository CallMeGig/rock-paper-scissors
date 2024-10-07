// Console based rock paper scissors game
//

// Score variables

let humanScore = 0;
let computerScore = 0;
const gameOptions = ["rock", "paper", "scissors"];



// getComputerChoice randomly returns "rock", "paper" or "scissors"
function getComputerChoice() {
    let intChoice = Math.floor(Math.random() * 3);

    return gameOptions[intChoice];
}

/** getHumanChoice gets users valid choice and returns it
function getHumanChoice() {
    let userChoice = prompt("Pick your weapon.", "rock, paper or scissors").toLowerCase();

    while (!gameOptions.includes(userChoice)) {
        userChoice = prompt("Please enter one of the aproved weapons.", "Approved weapons: rock, paper or scissors.")
    }

    if (userChoice === "rock") {
        return "rock";
    } else if (userChoice === "paper") {
        return "paper";
    } else if (userChoice === "scissors") {
        return "scissors";
    }
} **/

function displayRoundResults(roundWon, humanChoice, computerChoice) {
    const commentaryDiv = document.querySelector("#commentary");
    let roundResult = '';
    const text = document.createElement('p');
    commentaryDiv.innerHTML = '';

    switch (roundWon) {
        case true:
            roundResult = `You win! You played ${humanChoice} which beats ${computerChoice}.`;
            humanScore++;
            break;
        case false:
            roundResult = `You lose! You played ${computerChoice} which loses to ${humanChoice}.`;
            computerScore++;
            break;
        case undefined:
            roundResult = `It's a tie! You both played ${humanChoice}.`;
            break;
    }

    text.textContent = roundResult;
    commentaryDiv.appendChild(text);

}

function playRound(humanChoice, computerChoice) {
    let roundWon;

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                // computer wins
                roundWon = false;
            } else if(computerChoice == "scissors") {
                // human wins
                roundWon = true;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                // computer wins
                roundWon = false;
            } else if(computerChoice == "rock") {
                // human wins
                roundWon = true;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                // computer wins
                roundWon = false;;
            } else if(computerChoice == "paper") {
                // human wins
                roundWon = true;
            }
            break;
    }

    displayRoundResults(roundWon, humanChoice, computerChoice);

    if ((humanScore == 5) || (computerScore == 5)) {
        endGame();
    }
}

function endGame() {
    let winner = "";
    const scoreCard = document.querySelector('#commentary');
    scoreCard.innerHTML = '';
    const controlDiv = document.querySelector('#controls');
    controlDiv.innerHTML = '';


    if (humanScore > computerScore) {
        winner = "human";
    } else winner = "computer";
    scoreCard.textContent = `Game Over! The ${winner} wins the game.`;
    displayScore();
}

function rmvBtnListeners(btnR,btnP,btnS) {


    btnR.removeEventListener("click", handleR());
    btnP.removeEventListener("click", handleP());
    btnS.removeEventListener("click", handleS());
}


function addBtnListeners(btn1,btn2,btn3) {

    btn1.addEventListener("click", function handleR() {
        playRound("rock", getComputerChoice());
        //diplayScore();
    })

    btn2.addEventListener("click", function handleP() {
        playRound("paper", getComputerChoice());
        //diplayScore();
    })

    btn3.addEventListener("click", function handleS() {
        playRound("scissors", getComputerChoice());
        //diplayScore();
    })
}

function displayScore() {
    const scoreCard = document.querySelector("#scoreboard");
    const humanCard = document.createElement('p');
    const computerCard = document.createElement('p');
    const outcome = document.createElement('h3');

    if (humanScore > computerScore) {
        outcome.textContent = "You Win!";
    } else outcome.textContent = "You Lose!";


    humanCard.textContent = `Human Score: ${humanScore}`;
    computerCard.textContent = `Computer Score: ${computerScore}`;

    scoreCard.appendChild(outcome);
    scoreCard.appendChild(humanCard);
    scoreCard.appendChild(computerCard);
}

function playGame() {
    const rBtn = document.querySelector("#rock");
    const pBtn = document.querySelector("#paper");
    const sBtn = document.querySelector("#scissors");

    addBtnListeners(rBtn,pBtn,sBtn);

}

playGame();

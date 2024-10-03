// Console based rock paper scissors game
//

// Score variables

let humanScore = 0;
let computerScore = 0;



// getComputerChoice randomly returns "rock", "paper" or "scissors"

function getComputerChoice() {
    let intChoice = Math.floor(Math.random() * 3);

    if (intChoice == 0) {
        return "rock";
    } else if (intChoice == 1) {
        return "paper";
    } else return "scissors";
}


// getHumanChoice gets users valid choice and returns it

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"]
    let userChoice = prompt("Pick your weapon.", "rock, paper or scissors").toLowerCase();

    while (!choices.includes(userChoice)) {
        userChoice = prompt("Please enter one of the aproved weapons.", "Approved weapons: rock, paper or scissors.")
    }

    if (userChoice === "rock") {
        return "rock";
    } else if (userChoice === "paper") {
        return "paper";
    } else if (userChoice === "scissors") {
        return "scissors";
    }
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

    switch (roundWon) {
        case true:
            console.log(`You win! You played ${humanChoice} which beats ${computerChoice}.`);
            humanScore++;
            break;
        case false:
            console.log(`You lose! You played ${computerChoice} which loses to ${humanChoice}.`);
            computerScore++;
            break;
        case undefined:
            console.log(`It's a tie! You both played ${humanChoice}.`);
            break;
    }

    if ((humanScore == 5) || (computerScore == 5)) {
        endGame();
    }
}

function endGame() {
    let winner = "";
    if (humanScore == computerScore) {
        console.log("The game ends in a draw!");
    } else if (humanScore > computerScore) {
        winner = "human";
    } else winner = "computer";
    console.log(`Game Over! The ${winner} wins the game: ${Math.max(humanScore,computerScore)} to ${Math.min(humanScore,computerScore)}`);
}

function addBtnListeners(btn1,btn2,btn3) {

    btn1.addEventListener("click", ()=> {
        playRound("rock", getComputerChoice());
        //diplayScore();
    })

    btn2.addEventListener("click", ()=> {
        playRound("paper", getComputerChoice());
        //diplayScore();
    })

    btn3.addEventListener("click", ()=> {
        playRound("scissors", getComputerChoice());
        //diplayScore();
    })
}

function playGame() {
    const rBtn = document.querySelector("#rock");
    const pBtn = document.querySelector("#paper");
    const sBtn = document.querySelector("#scissors");

    if (humanScore == 3) {
        console.log(humanScore);
    } else {
        addBtnListeners(rBtn,pBtn,sBtn);
    }

    console.log(`Human Score:${humanScore}`);
    console.log(`Computer Score:${computerScore}`);
}

playGame();

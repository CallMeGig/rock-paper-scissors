// Console rock paper scissors game

function getComputerChoice() {
    let intChoice = Math.floor(Math.random() * 3);

    if (intChoice == 0) {
        return "rock";
    } else if (intChoice == 1) {
        return "paper";
    } else return "scissors";
}

function getHumanChoice() {
    let userChoice = prompt("Pick your weapon", "rock, paper or scissors");

    if (userChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (userChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (userChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else {

    }
}

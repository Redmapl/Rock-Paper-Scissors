//generate random computer input
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() *3);
    //use switch to execute the code based on the values generated
    switch(computerChoice){
        case(0):
        return "rock";
        case(1):
        return "paper";
        case(2):
        return "scissors";
    }
}


//get human choice using prompts
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper,scissors?", " ");
}


//state initial score
let humanScore = 0;
let computerScore = 0;

//playround gives the result of one round of  the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++
        console.log("You win this round!")
    } else {
        computerScore++
        console.log("You lose this round!")
    }
}

//get the result of five rounds of the game. the player choice and computer choice displays on the console
function playGame() {
    for (let i = 0; i < 5; i++ ) {
    const humanChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    }
}


playGame();
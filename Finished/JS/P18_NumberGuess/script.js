let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};


console.log(generateTarget());
// Write your code below:

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    
    //this works because thank god the player cannot guess a negative number
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    if (humanDifference <= computerDifference) {
        return true; // Human wins or ties
    } else {
        return false; // Computer wins
    }
};



const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    // project insists that I use the below statement instead of just a pure else statement
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;


//user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
}
//check if the user input is valid
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
} else {
    console.log('Invalid Entry');
}
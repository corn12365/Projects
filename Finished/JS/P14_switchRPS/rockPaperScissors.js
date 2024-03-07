//user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
      case "rock":
      case "paper":
      case "scissors":
        return userInput;
      default:
        console.log("Invalid Entry for Bozo");
        break;
    }
  };
  
  // AI choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  //compares values
  function determineWinner(userChoice, computerChoice) {
    switch (true) {
      case userChoice === computerChoice:
        return "It's a tie!";
      case userChoice === "rock" && computerChoice === "scissors":
      case userChoice === "paper" && computerChoice === "rock":
      case userChoice === "scissors" && computerChoice === "paper":
        return "You win!";
      default:
        return "Computer wins!";
    }
  }
  
  
  console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));
  
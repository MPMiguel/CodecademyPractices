let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return targetNumber = Math.floor(Math.random * 9)
};


const compareGuesses = (humanGuess, computerGuess, targetNumber) => {

  let humanDiff = Math.abs(targetNumber - humanGuess);
  let computerDiff = Math.abs(targetNumber - computerGuess);

  if (humanDiff < computerDiff) {
    return 'Humans win';
  } else if (humanDiff === computerDiff) {
    return 'Draw';
  } else {
    return 'Computer win';
  }
};

const updateScore = (update) => {
if (update === 'Humans win'){
     humanScore = humanScore +1;
} else {
  computerScore = computerScore +1;
};

}
const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
};





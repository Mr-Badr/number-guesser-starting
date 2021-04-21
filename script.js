let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humenGess, computerGess, target) => {
  humenNumber = Math.abs(target - humenGess);
  computerNumber = Math.abs(target - computerGess);

  if (humenGess < 0 || humenGess > 9) {
      return 'Enter number Between 0 and 9'
  } 
  if (humenNumber < computerNumber) {
      return true;
  } else if (humenNumber > computerNumber) {
      return false;
  } else {
      return true;
  }
};

function updateScore (winner) {
    if (winner === 'human') {
        humanScore ++;
    } else if (winner === 'computer') {
        computerScore ++;
    }
}

function advanceRound () {
    currentRoundNumber ++;
}


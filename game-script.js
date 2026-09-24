let humanScore = 0,
    computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// Capitalize first letter of a string
function capitalizeFirstLetter(string) {

  return string.at(0).toUpperCase() + string.slice(1);
}

//Randomly return a choice between 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
  
  const choice = getRandomInt(3);

  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}


// Prompt for a choice and return it. Assume that the choice is legit, only handle capitalization.
function getHumanChoice() {

  let choice = prompt('What do you choose: rock, paper or scissors?');
  
  return choice.toLowerCase();
}
    

// Return a positive integer in the range 0 (inclusive) and max (exclusive)
function getRandomInt(max) {

  return Math.floor(Math.random() * max);
}


/**
 * Play one round of rock-paper-scissors and print to the console the winner
 * 
 * @param {string} humanChoice - must be lowcase
 * @param {string} computerChoice - must be lowcase
 * 
 * @example
 * playRound(paper, scissors);
 * console output: 'Computer wins! Scissors beat paper'
 */
function playRound(humanChoice, computerChoice) {
  
  let winner;

  // Determine the winner
  if (humanChoice === computerChoice) {
    winner = 'tie'
  }
  else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      winner = 'Computer';
    } else { // computerChoice is scissors
      winner = 'You';
    }
  }
  else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      winner = 'You';
    } else { // computerChoice is scissors
      winner = 'Computer';
    }
  }
  else { // humanChoice is scissors
    if (computerChoice === 'rock') {
      winner = 'Computer';
    } else { // computerChoice is paper
      winner = 'You';
    }
  }

  // Output the winner with correct grammar and increment score
  let output,
      beat;
  if (winner === 'You') {
    // Ensure to print gramattically correct output
    beat = (humanChoice === 'scissors') ? 'beat' : 'beats'; 
    output = `You win! ${capitalizeFirstLetter(humanChoice)} ${beat} ${computerChoice}.`;
    humanScore++;
  } else if (winner === 'Computer') {
    beat = (computerChoice === 'scissors') ? 'beat' : 'beats';
    output = `Computer wins! ${capitalizeFirstLetter(computerChoice)} ${beat} ${humanChoice}.`;
    computerScore++;
  } else { // Tie
    output = `That's a tie! Computer chose ${computerChoice}.`;
  }

  console.log(output);

}
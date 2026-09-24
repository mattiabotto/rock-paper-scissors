playGame();

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
 * Play a game with default of 5 rounds
 * 
 * Change ROUNDS for a different amount of rounds
 */
function playGame() {
  let humanScore = 0,
      computerScore = 0;
  
  const ROUNDS = 5; // Change here round number

  for (let i = 0; i < ROUNDS; i++){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === 'You') humanScore++;
    else if(roundWinner === 'Computer') computerScore++;
  }

  // Output winner
  if (humanScore === computerScore) console.log("It's a tie!");
  else if (humanScore > computerScore) console.log('Congratulations, you won!');
  else console.log('Oh no, Computer won!');

  

  /**
   * Play one round of rock-paper-scissors and print to the console the winner
   * 
   * @param {string} humanChoice - must be lowcase
   * @param {string} computerChoice - must be lowcase
   * @returns {string} winner - 'You', 'Computer' or 'tie'
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
      // Ensure to print grammatically correct output
      beat = (humanChoice === 'scissors') ? 'beat' : 'beats'; 
      output = `You win! ${capitalizeFirstLetter(humanChoice)} ${beat} ${computerChoice}.`;
    } else if (winner === 'Computer') {
      beat = (computerChoice === 'scissors') ? 'beat' : 'beats';
      output = `Computer wins! ${capitalizeFirstLetter(computerChoice)} ${beat} ${humanChoice}.`;
    } else { // Tie
      output = `That's a tie! Computer chose ${computerChoice}.`;
    }

    console.log(output);
    return winner;

  }
}


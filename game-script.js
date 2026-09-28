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
    

// Return a positive integer in the range 0 (inclusive) and max (exclusive)
function getRandomInt(max) {

  return Math.floor(Math.random() * max);
}

/**
 * Play a game
 */
function playGame() {

  let humanScore = 0,
    computerScore = 0;

  const choiceContainer = document.querySelector('#choice-container');
  const resultsContainer = document.querySelector('#results');

  // Play one round as soon as one option is clicked
  choiceContainer.addEventListener('click', (e) => { // Get choices and play one round

    const humanSelection = e.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();

    const roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === 'You') humanScore++;
    else if(roundWinner === 'Computer') computerScore++;

    printScore(humanScore, computerScore);

    if (humanScore === 5 || computerScore === 5) {
      printWinner(humanScore, computerScore);

      // Disable choice buttons
      for (let btn of choiceContainer.children) {
        btn.disabled = true;
      }
      
      const restartBtn = document.createElement('button');
      restartBtn.textContent = 'Play again';
      resultsContainer.appendChild(restartBtn);

      restartBtn.addEventListener('click', restartGame);
    }
  });


  /**
   * Play one round of rock-paper-scissors and update the result into the DOM
   * 
   * @param {string} humanChoice - must be lowcase
   * @param {string} computerChoice - must be lowcase
   * @returns {string} winner - 'You', 'Computer' or 'tie'
   * 
   * @example
   * playRound(paper, scissors);
   * Output: 'Computer wins! Scissors beat paper'
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

    const roundResult = document.querySelector('#round-result');
    roundResult.textContent = output;
    
    return winner;
  }

  // Changes the DOM with the updated scores
  function printScore(humanScore, computerScore) {

    const humanScoreContainer = document.querySelector('#human-score');
    const computerScoreContainer = document.querySelector('#computer-score');

    humanScoreContainer.textContent = `Your score: ${humanScore}`;
    computerScoreContainer.textContent = `Computer's score: ${computerScore}`;
  }

  // Show the result of the game, adding an element to the DOM
  function printWinner(humanScore, computerScore) {
    let output;

    if (humanScore === computerScore) output = "It's a tie!";
    else if (humanScore > computerScore) output = 'Congratulations, you won!';
    else output = 'Oh no, Computer won!';

    const finalResult = document.createElement('div');
    finalResult.textContent = output;
    resultsContainer.appendChild(finalResult);
  }

  function restartGame() {
    console.log('Entered the restart function');

    // Remove restart button and final results
    for (let i = 0; i < 2; i++) {
      resultsContainer.lastChild.remove();
    }
    
    // Resetting the score UI
    for (let child of resultsContainer.children) {
      child.textContent = '';
    }

    humanScore = 0;
    computerScore = 0;

    for (let btn of choiceContainer.children) {
      btn.disabled = false;
    }
  }
}
let humanChoice = getHumanChoice();
console.log(humanChoice);

//Randomly return a choice between 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
  
  const choice = getRandomInt(3);

  switch (choice) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}


// Prompt for a choice and return it. Assume that the choice is legit, only handle capitalization.
function getHumanChoice() {

  let choice = prompt('What do you choose: rock, papers or scissors?');
  
  return choice.at(0).toUpperCase() + choice.slice(1).toLowerCase();
}
    

// Return a positive integer in the range 0 (inclusive) and max (exclusive)
function getRandomInt(max) {

  return Math.floor(Math.random() * max);
}
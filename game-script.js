let rock = 0,
    paper = 0,
    scissors = 0,
    errors = 0;

for (let i = 0; i < 100000; i++) {
  let choice = getComputerChoice();
  if (choice === 'Rock') rock++;
  else if (choice === 'Paper') paper++;
  else if (choice === 'Scissors') scissors++;
  else errors++;
}

console.log(rock, paper, scissors, errors);

//Randomly returns a choice between 'Rock', 'Paper', 'Scissors'
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
    

// Return a positive integer in the range 0 (inclusive) and max (exclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
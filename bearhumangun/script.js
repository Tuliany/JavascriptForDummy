

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
    return userInput
  } else {
    console.log('error')
  }
}

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0){
    return 'bear';
  } else if (randomNumber === 1){
    return 'human';
  } else {
    return 'gun';
  }
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'Tie'
  } 
  else if(userChoice === 'human'){
    if (computerChoice === 'bear'){
      return 'You/ve been eaten by a bear';
    } else {
      return 'looser'
    }
  }
  else if (userChoice === 'gun'){
    if(computerChoice === 'bear'){
      return 'you won';
      } else {
        return 'looser';
      }
  } 
  else if( userChoice ==='bear'){
    if (computerChoice === 'human') {
      return 'You/ve been eaten by a bear';
    }
    else {
      return 'looser'
    }
  } 
}

function playGame(){
  let promptUserChoice = prompt("Please choose bear, human or gun");
  let userChoice = getUserChoice(promptUserChoice);
  let computerChoice = getComputerChoice();
  console.log('user:',userChoice);
  console.log('computer:', computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
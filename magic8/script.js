let userName = prompt('"What is your name?"');
if (userName){
  console.log(`Hello ${userName}`);
} else {
  console.log('Hello');
}

let userQuestion = prompt("Please ask a question!");
console.log(`Your question ${userName}, was: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall="";
if(randomNumber == 0){
  eightBall = 'Better not tell you now.';
} else if (randomNumber == 1){
  eightBall = 'Concentrate and ask again.';
} else if (randomNumber == 2){
   eightBall = 'Reply hazy try again';
} else if (randomNumber == 3){
  eightBall = 'Cannot predict now';
} else if (randomNumber == 4){
  eightBall = 'My reply is no.';
} else if (randomNumber == 5){
  eightBall = 'My sources say no';
} else if (randomNumber == 6){
  eightBall = 'Outlook not so good';
} else if (randomNumber == 7){
  eightBall = 'Signs point to yes';
} else {
  eightBall = 'yes';
}

console.log(eightBall);
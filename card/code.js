//Globala scopes
let dealerSum = 0;
let sum = 0;

/* console.log(cards);

const card = document.createElement('img');
card.src = 'images/jack_of_diamonds.png';
card.width = '200';
card.height = "290";

document.querySelector('.cards').appendChild(card); */




//Uppgift 1: addNewRandomCard();

function addNewRandomCard() {
  let randomIndex = Math.floor(Math.random() * (cards.length - 1));
  let card = cards[randomIndex];
  return card;

}

//Uppgift 2: skapa en knapp som anropar addNewRandomCard och sen visar kortet på skärmen. 




document.querySelector('#takeCard').addEventListener('click', () => {

  const cardObject = addNewRandomCard();
  const cardImage = document.createElement('img');
  cardImage.src = `images/${cardObject.file}`;
  cardImage.width = '50';
  cardImage, height = '50';
  document.querySelector('.cards').appendChild(cardImage);

  //Uppgift 3: Skapa en variabel som håller redan på summan av korten.
  sum += cardObject.num;
  console.log(sum);
  if (sum > 21) {
    document.querySelector('.info').textContent = 'Över 21, You loose'
  }

})
//Uppgift 4: Skriv ut på skärmen om man blir fet. 
document.querySelector('#stop').addEventListener('click', () => {
  document.querySelector('.info').textContent = `Du stannade på ${sum}`


  //Uppgift loopa att dealern tar kort och visa dom på skärmen.
  // Loopa till dealern får över över 17 eller likamed 17. 
  while (dealerSum < 17) {
   const cardObject = addNewRandomCard();
   const cardImage = document.createElement('img');
   cardImage.src = `images/${cardObject.file}`;
   cardImage.width = '50';
   cardImage, height = '50';
   document.querySelector('.dealerCards').appendChild(cardImage);
    
   dealerSum += cardObject.num;
    console.log(dealerSum);
  }
  if (dealerSum > 21){
        document.querySelector('.info').textContent = 'Över 21, You win!'
  } else if ( dealerSum >= sum){
        document.querySelector('.info').textContent = 'Dealern hade mer eller lika många poäng, You loose'
  } else {
        document.querySelector('.info').textContent = 'You win'

  }


})


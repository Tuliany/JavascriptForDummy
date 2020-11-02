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

function startBlackJack() {
  document.getElementById('btnstart').value = 'Restart'
  addNewRandomCard.addEventlistenet('onclick', (event) => {
    event.target.btn

  })
  console.log(addNewRandomCard)
}
let sum = 0;



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
if(sum >21) {
   document.querySelector('.info').textContent = 'Över 21, You loose'
}

})
  //Uppgift 4: Skriv ut på skärmen om man blir fet. 

document.querySelector('#stop').addEventListener('click', ()=>{
  document.querySelector('.info').textContent = `Du stannade på ${sum}`
})

// DOM


// READ

const col = document.querySelector('.col');
console.log(col);

const divs = document.querySelectorAll('.ball.green');
console.log(divs);


/* divs.forEach((div) => {
  div.textContent = 'A';
}) */ 

/* divs.forEach((div) =>{
  div.innerHTML = '<h1>A </h1>';
}) */


 const id = document.getElementById('id');
 console.log(id);

const ball = document.getElementsByClassName('red')
console.log(ball)

const gBall = document.getElementById('g');
const gBall2 = document.querySelector('#g');
const firstDiv = document.querySelectorAll('div');
console.log(gBall2);


// CREATE
/* const element = document.createElement('div');
element.setAttribute('class','ball green');
element.textContent = 'P'; */

//OVAN HAR SKAPATS
//NEDAN LÄGGER VI IN

/* const col3 = document.querySelector('#col3');
col3.appendChild(element); */


//UPDATE
//UPPGIFT SKAPA EN RÖD BOLL MED 1:a

/* const element2 = document.createElement('div');
element2.setAttribute('class', 'ball red');
element2.textContent = '1';

const col2 = document.querySelector('#col2');
col2.appendChild(element2); */



/* let num = document.createElement('div');
element.setAttribute('class', 'ball blue');
element.textContent = '1';
num = parseInt('1');

const col1 = document.querySelector('#col1');
col1.appendChild(element); */

//INSERTBEFORE

/* const iElement = document.querySelector('#i');
col2.insertBefore(element, iElement); */


//REMOVE
/* col2.removeChild(iElement) */


// UPPGIFT LÄGG en blå boll innan D

const oneBlue = document.createElement('div');
oneBlue.setAttribute('class', 'ball blue');
oneBlue.textContent = '1';

const col1 = document.querySelector('#col1');
col1.appendChild(oneBlue);

const iOneBlue = document.querySelector('#d')
col1.insertBefore(oneBlue, iOneBlue);

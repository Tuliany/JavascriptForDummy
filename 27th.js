//ÄNDRA CSS
/* const fElement = document.querySelector('#f');
 *//* fElement.style.cssText = 'background-color: pink; border-radius: 0;';
 */


 //EVENTS
/* const kElement = document.querySelector('#k');
kElement.addEventListener('click', (e)=>{
  e.target.className = 'ball red';
})




fElement.addEventListener('mouseenter', (e) => {
  e.target.className = 'ball green';
})

fElement.addEventListener('mouseover', (e) => {
  e.target.className = 'ball blue';
}) */

/* function makeGreen(element){
element.className = 'ball green';
} */

//Uppgift
/* function makeGreen(){
let element = document.getElementById('makeGreen')
element.addEventListener('mouseover', (e) => {
  e.target.className = 'ball green';
})}
 */
/* 
 function makeSelectedColor(element) {
   const selectElement = document.querySelector('#colors');
   element.className = 'ball '+ selectElement.value
 }

 const fElement = document.querySelector('#f');
 fElement.addEventListener('mouseover', (event)=>{
   event.target.className = 'ball green';
 })

 fElement.addEventListener('mouseout', (event)=>{
   event.target.className = 'ball blue';
 })

 fElement.onclick = ()=> {
   this.className = 'ball green';
 } */
 const fElement = document.querySelector('#f');

 function makeGreen() {
   this.className = 'ball green';
 }

 function makeRed(){
   this.className = 'ball red';
 }

 fElement.onmouseover = makeGreen;
 fElement.onmouseout = makeRed;

/* let count = 0;

setInterval(()=>{

  count++;
  console.log(count);

},10000) // sätter speeden på räkningen


setTimeout(()=>{
  alert('hej');

}, 1000); // gör det bara en gång */
/* 
let setTime = setInterval(currentTime, 1000); */



/* function currentTime(){
  const date = new Date();

/*   const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  document.getElementById('clock').innerText = hour + " : " + min + " : " + sec; */

/*   document.getElementById('clock').innerHTML = date.toLocaleTimeString();

}
currentTime() */
 


setInterval(()=>{
  const current = new Date();
  document.querySelector('.clock').textContent = current.toLocaleTimeString();
}, 1000)
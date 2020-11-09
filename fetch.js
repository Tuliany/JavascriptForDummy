const promise = fetch('https://api.spacexdata.com/v3/capsules')
console.log(promise)

promise.then((response)=>{
  console.log(response)
  return response.json();
}).then((json)=>{
  console.log(json)
  document.querySelector('.space').textContent = json[0].details;
})

//JSON - Javascripy Object Notation
/* 
 const obj ={
  'userId': 1,
  'id': 1
} */

/* const text = `{
  'userId':1 ,
  'id': 1
}`;

const obj2 = JSON.parse(text);
alert(obj2.id);  */

/* const objString = JSON.stringify(JSON.stringify(obj))
alert(objString);
 */
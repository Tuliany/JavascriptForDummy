//Skapar tiden jsut nu.
const now = new Date();
console.log(now)



console.log(now.getTime())

//Använder en tidstämpel
const epochTime = new Date();
console.log(epochTime);

console.log(Date())

//'YYYY-MM-DD' 'YYYY/MM/DD'
const date = new Date('2001-01-01')
console.log(date);

//year, month, day, hour, seconds, miliseconds
const dateWithNumbers = new Date(1998, 12, 24, 12,00,00)
console.log(dateWithNumbers)

//UPPGIFT 

const today = new Date()
console.log(today.getMilliseconds())


console.log(today.getMinutes())
console.log(today.getHours())
console.log(today.getDay())
console.log(today.getMonth())
console.log(today.getFullYear())

const yesterday = new Date('August 19, 1975 23:15:30');
console.log(yesterday.getDate())


//Uppdatera datum(())
const tomorrow = new Date('1986-10-08');
tomorrow.setDate(7);
console.log(tomorrow.getDate());

tomorrow.setFullYear(2000);
console.log(tomorrow)


const weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate()-7)

console.log(weekAgo);

const weekAgo2 = new Date();
const weekInMiliSec = 1000 * 60 * 60 * 24 * 7; //sekunder i veckan.
console.log(weekInMiliSec);

const timeStamp = weekAgo2.getTime();
console.log(timeStamp);
weekAgo2.setTime(timeStamp -  weekInMiliSec);
console.log(weekAgo2)

//UTC tid
const now3 = new Date();
console.log(now3.getUTCHours());
console.log(now3.getHours());

//Gör en funktion som räknar ut skillnad i milisek mellan två datum.



function diff(d1,d2){
  const day1 = d1.getTime()
  const day2 = d2.getTime()
  return Math.abs(day1 -day2);
}
console.log(diff(new Date(2018-02-06), new Date(2019-08-21)));

function isLater (d1, d2){
  return d1.getTime() > d2.getTime();
}


const return2WeeksAgo = (date) => {
  let newDate = new Date();
  newDate.setTime(date.getTime() - 2 * (1000 * 60 * 60 * 24 * 7));
  return newDate;
};


function isOctober(date){
 return date.getMonth() == 9
}
console.log(isOctober(new Date('2020-10-10')))





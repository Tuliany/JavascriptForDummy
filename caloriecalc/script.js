function inputCaloriesByDay(day){
  if(day === 'monday'){
    return 3500;
  } else if (day === 'tuesday'){
    return 3400;
  } else if (day === 'wednesday'){
    return 3300;
  } else if (day === 'thursday'){
    return 3200;
  } else if (day === 'friday'){
    return 3100;
  } else if (day === 'saturday'){
    return 3000;
  } else if(day === 'sunday'){
    return 4000;
  } else {
    return 'what day?';
  }

}
console.log(inputCaloriesByDay('sunday'));
console.log(inputCaloriesByDay('monday'));

function getTotalCalories() {
  return inputCaloriesByDay('monday') +
    inputCaloriesByDay('tuesday') +
    inputCaloriesByDay('wednesday') +
    inputCaloriesByDay('thursday') +
    inputCaloriesByDay('friday') +
    inputCaloriesByDay('saturday') +
    inputCaloriesByDay('sunday');
}

console.log(getTotalCalories());

function getIdealCalories(){
  let idealDailyCalories = 2000;
  return idealDailyCalories * 7;
}
console.log(getIdealCalories());

function calculateHealthPlan(){
  let actualCalories = getTotalCalories();
  let idealCalories = getIdealCalories();
  if(actualCalories === idealCalories){
    return "You ate just the right amount of food!";
  }
  else if (actualCalories > idealCalories){
    return "Time to head to the gym!";
  } else {
    return "Treat yourself";
  }
}
 console.log(calculateHealthPlan());
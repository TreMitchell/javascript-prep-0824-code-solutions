// The function isAdult is being defined with one parameter, age.
function isAdult(age) {
  //There's an if statement evaluating the expression age is greater than or equal to 18 & an opening curly brace for the if statement code block.
  if (age >= 18) {
    //return true
    return true;
    //There is a closing curly brace for the if statement followed by an else statement with an opening curly brace for the else statement code block.
  } else {
    //return false
    return false;
    //There is a closing curly brace for the else statement
  }
  //There is a closing curly brace for the function
}
//The function isAdult is being called with the argument 21, & the value of that call is being assigned to the variable isAdultResult.
const isAdultResult = isAdult(21);
//The log method of the console object is being defined with one parameter, isAdultResult.
console.log(isAdultResult);

//The function didStudentPass is being defined with one parameter, score.
function didStudentPass(score) {
  //There's an if statement evaluating the expression score is greater than or equal to 70 & an opening curly brace for the if statement code block.
  if (score >= 70) {
    //return true
    return true;
    //There is a closing curly brace for the if statement followed by an else statement with an opening curly brace for the else statement code block.
  } else {
    //return false
    return false;
    //There is a closing curly brace for the else statement
  }
  //There is a closing curly brace for the function
}
//The function didStudentPass is being called with the argument 90, & the value of that call is being assigned to didStudentPassResult.
const didStudentPassResult = didStudentPass(90);
//The log method of the console object is being defined with one parameter, didStudentPassResult.
console.log(didStudentPassResult);

//The function gradeCalculator is being defined with one parameter, score.
function gradeCalculator(score) {
  //There's an if statement evaluating the expression score is greater than or equal to 100 & an opening curly brace for the if statement code block.
  if (score >= 100) {
    //return A++;
    return 'A++';
    //There is a closing curly brace for the if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (score < 100 && score > 90) {
    //return A;
    return 'A';
    //There is a closing curly brace for the else if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (score < 90 && score > 80) {
    //return B;
    return 'B';
    //There is a closing curly brace for the else if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (score < 80 && score > 70) {
    //return C;
    return 'C';
    //There is a closing curly brace for the else if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (score < 70 && score > 60) {
    //return D;
    return 'D';
    //There is a closing curly brace for the else if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (score < 60 && score > 50) {
    //return F;
    return 'F';
    //There is a closing curly brace for the else if statement followed by an else statement with an opening curly brace for the else statement code block.
  } else {
    //return 'See me in office hours!';
    return 'See me in office hours!';
    //There is a closing curly brace for the else statement
  }
  //There is a closing curly brace for the function
}
//The function gradeCalculator is being called with the argument 49, & the value of that call is being assigned to gradeCalculatorResult.
const gradeCalculatorResult = gradeCalculator(49);
//The log method of the console object is being defined with one parameter, isAdultResult.
console.log(gradeCalculatorResult);

//The function seasonMessenger is being defined with one parameter, season.
function seasonMessenger(season) {
  //There's an if statement evaluating the expression season is strictly equal to summer & an opening curly brace for the if statement code block.
  if (season === 'summer') {
    //return it is hot today
    return 'it is hot today';
    //There is a closing curly brace for the if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (season === 'spring') {
    //return the flowers are blooming
    return 'the flowers are blooming';
    //There is a closing curly brace for the else if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (season === 'autumn') {
    //return the leaves are changing colors
    return 'the leaves are changing colors';
    //There is a closing curly brace for the else if statement followed by an else if statement with an opening curly brace for the else if statement code block.
  } else if (season === 'winter') {
    //return it is cold today
    return 'it is cold today';
    //There is a closing curly brace for the else if statement followed by an else statement with an opening curly brace for the else statement code block.
  } else {
    //return Please enter a valid season
    return 'Please enter a valid season';
    //There is a closing curly brace for the else statement
  }
  //There is a closing curly brace for the function
}
//The function seasonMessenger is being called with the argument 49, & the value of that call is being assigned to seasonMessengerResult.
const seasonMessengerResult = seasonMessenger('spring');
//The log method of the console object is being defined with one parameter, isAdultResult.
console.log(seasonMessengerResult);

//The function dayDetector is being defined with one parameter, dayOfTheWeek.
function dayDetector(dayOfTheWeek) {
  //There's an if statement evaluating the expression dayOfTheWeek is strictly equal to the string Saturday or the expression dayOfTheWeek is strictly equal to the string Sunday & an opening curly brace for the if statement code block.
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    //return have a good weekend
    return 'have a good weekend';
    //There is a closing curly brace for the  if statement followed by an else statement with an opening curly brace for the else statement code block.
  } else {
    //return have a good weekend
    return 'It is a weekday!';
    //There is a closing curly brace for the else statement
  }
  //There is a closing curly brace for the function
}
//The function dayDetector is being called with the argument 49, & the value of that call is being assigned to dayDetectorResult.
const dayDetectorResult = dayDetector('Tuesday');
//The log method of the console object is being defined with one parameter, isAdultResult.
console.log(dayDetectorResult);

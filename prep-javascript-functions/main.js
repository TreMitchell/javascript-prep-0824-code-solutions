// #1 addTwoNumbers
// Line 3: A function named addTwoNumbers is being defined with two parameters, num1 and num2.
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
/* Line 10: The function addTwoNumbers is being called with the arguments 3 & 6, and the value
 of that call is being assigned to the variable addTwoNumbersResult. */
/* Line 11: The log method of the console.object is being called with two arguments, a string &
 addTwoNumbersResult. */
const addTwoNumbersResult = addTwoNumbers(3, 6);
console.log('addTwoNumbers exercise:', addTwoNumbersResult); //9

// #2 convertHoursToMinutes
// Line 17: A function named convertHoursToMinutes is being defined with one parameter, hours.
/* Line 18: The result of the expression hours times the number 60 is being assigned to the variable
 minutes. */
function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}
/* Line 25: The function convertHoursToMinutes is being called with the argument 4, and the value
 of that call is being assigned to the variable convertHoursToMinutesResult. */
/* Line 26: The log method of the console.object is being called with two arguments, a string &
 convertHoursToMinutesResult. */
const convertHoursToMinutesResult = convertHoursToMinutes(4);
console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult); //240

//#3 getGreeting
// Line 30: A function named getGreeting is being defined with one parameter, name.
function getGreeting(name) {
  const greeting = 'Hello' + name + '!';
  return greeting;
}
// Line 39: The string Hello is being assigned to the variable greeting.
/* Line 40: The string value of the variable greeting is being concatenated with ' Tré & the
 result of that expression is being reassigned to the variable greeting. */
/* Line 41: The log method of the console.object is being called with two arguments, a string &
 greeting. */
const greeting = getGreeting(' Tré');
console.log('getGreeting exercise:', greeting); //Hello Tré

// #4 addAndMultiplyBy5
// Line 45: A function named addAndMultiplyBy5 is being defined with two parameters, num1 & num2.
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
/* Line 52: The function addAndMultiplyBy5 is being called with the arguments 12 & 6, and the value
 of that call is being assigned to the variable sumTimesFive. */
/* Line 53: The log method of the console.object is being called with two arguments, a string &
 sumTimesFive. */
const sumTimesFive = addAndMultiplyBy5(12, 6);
console.log('sumTimesFive exercise:', sumTimesFive); //90

//#5 multiplyAndDivideBy5
// Line 57: A function named multiplyAndDivideBy5 is being defined with two parameters, num1 & num2.
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
/* Line 64: The function multiplyAndDivideBy5 is being called with the arguments 15 & 10, and the value
 of that call is being assigned to the variable productDivideByFive. */
/* Line 65: The log method of the console.object is being called with two arguments, a string &
 productDivideByFive. */
const productDivideByFive = multiplyAndDivideBy5(15, 10);
console.log('productDivideByFive exercise:', productDivideByFive); //30

//#6 subtractTwoNumbers
// Line 69: A function named subtractTwoNumbers is being defined with two parameters, num1 & num2.
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
/* Line 76: The function subtractTwoNumbers is being called with the arguments 25 & 15, and the value
 of that call is being assigned to the variable difference. */
/* Line 77: The log method of the console.object is being called with two arguments, a string &
 difference. */
const difference = subtractTwoNumbers(25, 15);
console.log('subtractByTwoNumbers exercise:', difference); //10

//#7 getCircleCircumference
// Line 81: A function named getCircleCircumference is being defined with one parameter, radius.
function getCircleCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  return circumference;
}
/* Line 89: The function getCircleCircumference is being called with the argument 10, and the value
 of that call is being assigned to the variable getCircleCircumferenceResult. */
/* Line 90: The log method of the console.object is being called with two arguments, a string &
 getCircleCircumferenceResult. */
const getCircleCircumferenceResult = getCircleCircumference(10);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult); //62.831....

//#8 getFullName
// Line 95: A function named getFullName is being defined with two parameters, firstName & lastName.
function getFullName(firstName, lastName) {
  return firstName + lastName;
}
/* Lines 103 & 104: The strings Tré & Mitchell are being assigned to the variables firstName &
lastName. */
/* Line 105: The result of the expression firstName concatenated with a string, being concatenated
 with lastName is assigned to the variable getFullNameResult. */
/* Line 106: The log method of the console.object is being called with two arguments, a string &
 getFullNameResult. */
const getFullNameResult = getFullName('Tré', 'Mitchell');
console.log('getFullName exercise:', getFullNameResult); //Tré Mitchell

//#9 cube
// Line 110: A function named cube is being defined with one parameter, number.
function cube(number) {
  const getCubed = number * number * number;
  return getCubed;
}
/* The function cube is being called with the argument 5, and the value
 of that call is being assigned to the variable getCubedResult. */
/* The log method of the console.object is being called with two arguments, a string &
 getCubedResult. */
const getCubedResult = cube(5);
console.log('cube exercise:', getCubedResult); //125

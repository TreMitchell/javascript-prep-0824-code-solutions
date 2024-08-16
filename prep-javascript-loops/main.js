//While Loops
/* */
let whileLoop1 = 0;
const whileLoop1Result = [];
while (whileLoop1 < 10) {
  whileLoop1Result.push(whileLoop1);
  whileLoop1++;
}
console.log('whileLoop1 output:', whileLoop1Result);

/* */
let whileLoop2 = 0;
const whileLoop2Result = [];
while (whileLoop2 < 10) {
  whileLoop2Result.push(whileLoop2 * 2);
  whileLoop2++;
}
console.log('whileLoop2 output:', whileLoop2Result);

// For loops
/* */
const forLoop1Result = [];
for (let forLoop1 = 0; forLoop1 < 10; forLoop1++) {
  forLoop1Result.push(forLoop1);
}
console.log('forLoop1 output:', forLoop1Result);

/* */
for (let forLoop2 = 100; forLoop2 > 0; forLoop2--) {
  console.log('Time to explosion: ' + forLoop2);
}

// For...in Loops
/* */
const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  let propertyNames = [];
  for (let prop in person) {
    propertyNames.push(prop);
  }
  return propertyNames;
}
let forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  let stringNames = [];
  for (let key in person) {
    stringNames.push(object[key]);
  }
  return stringNames;
}
let forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);

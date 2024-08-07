const person = {
  firstName: 'Tré',
  lastName: 'Mitchell',
  hobby: 'video games',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is:", fullName);

person.job = 'Professional ESports Player';
console.log("This person's current job is:", person.job);

person['previousJob'] = 'Game Tester';
console.log("This person's previous job was:", person['previousJob']);

console.log('The complete person object:', person);

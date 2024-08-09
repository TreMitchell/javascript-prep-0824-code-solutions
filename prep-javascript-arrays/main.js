/* An array of string elements: html, css, js, react, node and postgres is being assigned
to the variable languages.  */
const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];

// The log method of the console object is being called with one argument, languages.
console.log(languages);

/* The first and third indexes in the variable language is being assigned to the
variable last element. */
const firstElement = languages[0];
const thirdElement = languages[2];

/* The log method of the console object is being called with two arguments, a string &
first/third element */
console.log('the first element of the array is', firstElement); //html
console.log('the third element of the array is', thirdElement); //javascript

/* The length property of the languages object is being assigned to the variable
length. The log method of the console object is being called with two arguments,
a string & length of the variable languages.*/
const length = languages.length;
console.log('The length of the array is', languages.length); //6

/* The 5th index in the variable language is being assigned to the variable last element.
The log method of the console object is being called with two arguments, a string &
last element*/
const lastElement = languages[5];
console.log('The last element of the array is', lastElement); //postgres

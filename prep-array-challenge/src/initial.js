/* exported initial */
function initial(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  console.log(newArray);
  return newArray;
}

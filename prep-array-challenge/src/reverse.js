/* exported reverse */
function reverse(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  console.log(newArray);
  return newArray;
}

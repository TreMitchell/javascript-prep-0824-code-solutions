/* exported tail */
function tail(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  console.log(newArray);
  return newArray;
}

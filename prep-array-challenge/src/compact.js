/* exported compact */
function compact(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

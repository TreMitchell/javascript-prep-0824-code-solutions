/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  console.log(string);
  return string.split(' ');
}

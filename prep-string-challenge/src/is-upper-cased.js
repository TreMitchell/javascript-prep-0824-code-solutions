/* exported isUpperCased */
function isUpperCased(word) {
  const upperCasedWord = word.toUpperCase();
  if (word === upperCasedWord) {
    return true;
  } else {
    return false;
  }
  return upperCasedWord;
}
console.log(isUpperCased('LearningFuze'));
console.log(isUpperCased('JavaScript'));
console.log(isUpperCased('HTML'));
console.log(isUpperCased('css'));
console.log(isUpperCased('PHP'));

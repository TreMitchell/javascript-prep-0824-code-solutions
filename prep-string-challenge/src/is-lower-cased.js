/* exported isLowerCased */
function isLowerCased(word) {
  const lowerCasedWord = word.toLowerCase();
  if (word === lowerCasedWord) {
    return true;
  } else {
    return false;
  }
  return lowerCasedWord;
}
console.log(isUpperCased('LearningFuze'));
console.log(isUpperCased('JavaScript'));
console.log(isUpperCased('HTML'));
console.log(isUpperCased('css'));
console.log(isUpperCased('PHP'));

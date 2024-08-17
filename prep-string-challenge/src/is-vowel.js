/* exported isVowel */
function isVowel(char) {
  const lowerChar = char.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  console.log(vowels.includes(lowerChar));
  return vowels.includes(lowerChar);
}

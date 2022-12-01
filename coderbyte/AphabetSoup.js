/*
QUESTION:
  Have the function AlphabetSoup(str) take the str string parameter being passed 
  and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
  Assume numbers and punctuation symbols will not be included in the string.
*/
// TESTS SORTING 
const AlphabetSoup= (str) =>{
  // first make the string to be an array
  const strArr = str.split('');
  // sort the array
  const sortedStrArr = strArr.sort();
  // join the resulted array to string again
  const result = sortedStrArr.join('');
  return result;

  // can also be done in a single line of code
  // return str.split("").sort().join("");
} 
AlphabetSoup(readline());
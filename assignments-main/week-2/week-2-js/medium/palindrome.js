/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length-1;
  while(left<right){
    if(str[left].toLowerCase() != str[right].toLowerCase()){
      return false
    }
    left++
    right--
  }
    return true
  }
  

console.log(isPalindrome("area"));

module.exports = isPalindrome;

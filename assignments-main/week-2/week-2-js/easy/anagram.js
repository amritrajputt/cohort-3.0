/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const arr1 = Array.from(str1).sort()
  const arr2 = Array.from(str2).sort()
if(arr1.join() == arr2.join()){
  return true
}else{
  return false
}
}
const ans = isAnagram("amrit","mtira")
if(ans){
  console.log("true");
}else{
  console.log("false");
}
// module.exports = isAnagram;

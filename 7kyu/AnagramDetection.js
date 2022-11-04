/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

var isAnagram = function(test, original) {
    test = test.toLowerCase().split("")
    original = original.toLowerCase()
    
    for(let i=0; i<original.length; i++){
      if(test.includes(original[i])) test.splice(test.indexOf(original[i]),1)
      else return false
    }
    
    if(test.length === 0) return true
    return false
};
/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    for(let i=0; i<Math.ceil(x.length/2); i++){
      if(x[i].toUpperCase() !== x[x.length-i-1].toUpperCase()){
        return false
      }
    }
    return true
}
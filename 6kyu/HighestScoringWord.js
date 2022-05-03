/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let word, sum
    let max = 0
    const abc = "abcdefghijklmnopqrstuvwxyz"
    
    x.split(" ").forEach(function(n){
      sum = 0
      for(let i=0; i<n.length; i++){
        sum += abc.indexOf(n[i]) +1
      }
      if(sum > max){
        word = n
        max = sum
      }
    })
    
    return word
}
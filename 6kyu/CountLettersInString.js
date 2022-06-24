/*
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Example:

letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
*/

function letterCount(s){
    let letters = {}
    
    s.split("").forEach(ch => {
      if(letters[ch] == null){
        letters[ch] = 1
      }else{
        letters[ch]++
      }
    })
    
    return letters
}
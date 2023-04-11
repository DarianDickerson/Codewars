/*
Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/

function firstDup (s) {
    let letters = new Set()
    let repeat = ""
    
    for(let i=0; i<s.length; i++){
      if(letters.has(s[i])){
        repeat += s[i]
      }
      else{
        letters.add(s[i])
      }
    }
    
    
    if(repeat === "") return undefined
    for(let i=0; i<s.length; i++){
      if(repeat.includes(s[i])) return s[i] 
    }
}
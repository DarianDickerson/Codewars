/*
If we alternate the vowels and consonants in the string "have", we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'have', 'heva', 'vahe', 'veha']. These are the only possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

Given a string:

alternate the vowels and consonants and return the lexicographically lowest element in the list
If any two or more vowels or consonants must follow each other, return "failed"
if the number of vowels and consonants are equal, the first letter of the result must be a vowel.
Examples:

solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
solve("oruder") = "edorur"
solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.
Vowels will be any of "aeiou". Input will be a lowercase string, no spaces. See test cases for more examples.

Good luck!
*/

function solve(s) {
    const vowels = "aeiou"
    let vow = [], cons = []
    s.split("").forEach(ch=> vowels.includes(ch) ? vow.push(ch) : cons.push(ch))
    
    if(Math.abs(vow.length - cons.length) > 1){
      return "failed"
    }
    
    vow.sort()
    cons.sort()
    
    let first, second
    if(vow.length > cons.length){
      first = vow
      second = cons
    }else if(cons.length > vow.length){
      first = cons
      second = vow
    }else{
      first = vow
      second = cons
    }
    
    let res = ""
    for(let i=0; first.length > 0 || second.length > 0; i++){
      if(i % 2){    
        res += second[0]
        second.shift()
      }else{
        res += first[0]
        first.shift()
      }
    }
    
    return res
}
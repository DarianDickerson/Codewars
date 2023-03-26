/*
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/

function charToAscii(string){
    if(string === "") return null
    let abc = "abcdefghijklmnopqrstuvwxyz"
    let res = {}
    
    string.split("").forEach(ch =>{
      if(abc.includes(ch) || abc.includes(ch.toLowerCase())){
        if(res[ch] == null){
          res[ch] = ch.charCodeAt(0)
        }
      }
    })
    
    return res
}
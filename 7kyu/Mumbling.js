/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    let word = ""
    
    for(let i=0; i<s.length; i++){
      //Add Uppercase Letter 
      word += s[i].toUpperCase()
      
      //Add multiple lower case letters
      for(let j=0; j<i; j++){
        word += s[i].toLowerCase()
      }
      
      //Add "-"
      if(i !== s.length - 1){
        word += "-"
      }
    }
    
    return word
}
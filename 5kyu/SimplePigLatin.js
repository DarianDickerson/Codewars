/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    return str.split(" ").map(function(wd){
      //Only checked for ? and ! but probably should chekc for more punctuation
      if(!(wd.includes("!") || wd.includes("?"))){
        return wd.slice(1) + wd[0] + "ay"
      }
      return wd
    }).join(" ")
}
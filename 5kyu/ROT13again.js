/*
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

Test examples:

"EBG13 rknzcyr." -->
"ROT13 example."

"This is my first ROT13 excercise!" -->
"Guvf vf zl svefg EBG13 rkprepvfr!"
*/

function rot13(str) {
    let abc = "abcdefghijklmnopqrstuvwxyz"
    let res = ""
    
    str.split("").forEach(function(ch){
      if(abc.includes(ch)){
        res += abc[(abc.indexOf(ch) + 13) % 26]
      }
      else if(abc.includes(ch.toLowerCase())){
        res += abc[(abc.indexOf(ch.toLowerCase()) + 13) % 26].toUpperCase()
      }
      else{
        res += ch
      }
    })
    
    return res
}
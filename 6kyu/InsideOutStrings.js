/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

function insideOut(x){
    return x.split(" ").map(w => {
      if(w.length < 4) return w
      else if(w.length % 2 === 0){
        return w.substring(0,w.length/2 ).split("").reverse().join("") + w.substr(w.length/2).split("").reverse().join("")
      }
      else{
        return w.substring(0,Math.floor(w.length/2)).split("").reverse().join("") + w[Math.floor(w.length/2)] + w.substr(Math.ceil(w.length/2)).split("").reverse().join("")
      }
    }).join(" ")
}
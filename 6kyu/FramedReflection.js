/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.*/

function mirror(text){
    let words = text.split(" ")
    let longest = Math.max(...words.map(wd => wd.length))
    
    words = words.map(wd => {
      let temp = "* " + wd.split("").reverse().join("")
      for(let i=0; i < longest - wd.length; i++){
        temp += " "
      }
      
      return temp + " *\n"
    }).join("")
    
    let border = "****"
    for(let i=0; i<longest; i++){
      border += "*"
    }
    
    return border + "\n" + words + border
}
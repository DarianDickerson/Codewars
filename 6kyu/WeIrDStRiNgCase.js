/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
    return string.split(" ").map(w =>{
      let wd = ""
      for(let i=0; i<w.length; i++){
        if(i % 2 === 0){
          wd += w[i].toUpperCase()
        }else{
          wd += w[i]
        }
      }
      return wd
    }).join(" ")
}
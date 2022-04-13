/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers){
  
  return input.split("\n").map(function(wd){
    let str = wd
    for(let i=0; i<markers.length; i++){
      if(str.includes(markers[i])){
        str = str.substring(0,str.indexOf(markers[i]))
      }
    }
    
    while(str[str.length-1] === " "){
      str = str.substring(0,str.length-1)
    }
    
    return str
  }).join("\n")
}
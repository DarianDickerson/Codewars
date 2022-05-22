/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    let res = ""  
    for(let i=0; i<string.length; i++){
        if(string[i] === string[i].toUpperCase() && i != 0){
          res += " " + string[i]
        }else{
          res += string[i]
        }
    }
    return res
}
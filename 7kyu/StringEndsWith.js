/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
    let check = ""
    
    for(let i=str.length - ending.length; i<str.length; i++){
      check += str[i]
    }
    
    if(ending === check){
      return true
    } else{
      return false
    }
}
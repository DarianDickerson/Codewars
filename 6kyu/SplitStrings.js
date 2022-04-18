/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    let pairs =[] 
    for(let i=0; i<str.length; i+=2){
      let temp = str[i]
      if(str[i+1] === undefined){
        temp += "_"
      }
      else{
        temp += str[i+1]
      }
      pairs.push(temp)
    }
    return pairs
}
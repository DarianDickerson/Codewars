/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(s){
    let nums = "0123456789"
    let abc = "abcdefghijklmnopqrstuvwxyz"
    let res = [0,0,0,0]
    
    s.split("").forEach(ch =>{
      if(abc.includes(ch.toLowerCase())){
        if(ch.toUpperCase() === ch) res[0]++
        else res[1]++
      }
      else if(nums.includes(ch)) res[2]++
      else res[3]++
    })
    
    return res
}
/*
Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
*/

function deleteDigit(n) {
    let nums = []
    n = n.toString()
    for(let i=0; i<n.length; i++){
      let temp = n.substring(0,i) + n.substring(i+1)
      nums.push(+temp)
    }
    return Math.max(...nums)
}
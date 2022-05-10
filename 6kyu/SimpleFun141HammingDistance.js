/*
Task
The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

Example
For a = 25, b= 87, the result should be 4

25: 00011001
87: 01010111
The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

Input/Output
[input] integer a
First Number. 1 <= a <= 2^20

[input] integer b
Second Number. 1 <= b <= 2^20

[output] an integer
Hamming Distance
*/

function hammingDistance (a, b) {
    let l,s
    if(a > b ){
      l = a.toString(2).split("")
      s = b.toString(2).split("")
    }else{
      s = a.toString(2).split("")
      l = b.toString(2).split("")
    }
    
    while(s.length < l.length){
      s.unshift("0")
    }
    
    return l.filter((n,i)=> {
      if(n != s[i]){
        return n
      }
    }).length
}
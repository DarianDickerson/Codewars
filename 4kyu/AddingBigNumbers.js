/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
    let l,s
    
    if(Number(a)>Number(b)){
      l = a.split("").reverse().map(n=>+n)
      s = b.split("").reverse().map(n=>+n)
    }
    else{
      s = a.split("").reverse().map(n=>+n)
      l = b.split("").reverse().map(n=>+n)
    }
    
    for(let i=0; i<l.length; i++){
      if(i<s.length){
        l[i] += s[i]
      }
      if(l[i] > 9){
        l[i] = l[i] % 10
        if(i === l.length-1){
          l.push(0)
        }
        l[i+1] += 1
      }
    }
    return l.reverse().join("")
}
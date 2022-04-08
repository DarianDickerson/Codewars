/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum( a,b ){
    let more, less
    let sum = 0
    
    if(a>b){  
      more = a 
      less = b 
    }else{
      more = b 
      less = a
    }
    
    for(let i=less; i<=more; i++){
      sum += i
    }
    
    return sum
}
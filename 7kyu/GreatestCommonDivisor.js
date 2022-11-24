/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

function mygcd(x,y){
    let a,b
    if(x === y) return x
    else if(x > y){
      a = x
      b = y
    }else{
      a = y
      b = x
    }  
    
    let temp = 1
    while(temp >= 0){
      if(a % b === 0) {
        return b
      }
      temp = a % b
      a = b
      b = temp
    }
    
    return b
}
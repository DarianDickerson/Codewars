/*
Your task is to write function factorial.
*/

function factorial(n){
    if(n === 0) return 1
    let sum = 1
    
    for(let i=1; i<=n; i++){
      sum *= i
    }
    return sum
}
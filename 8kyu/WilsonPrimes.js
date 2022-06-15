/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

function amIWilson(p) {
    let sum = 1
    for(let i=1; i<=p-1; i++){
      sum *= i
    }
    return Number.isInteger((sum + 1)/(p*p))
}
/*
Write a function that will simplify a compound fraction. As input, it should accept three arguments as integers: integer, numerator, and denominator. It should return an array with three items, all integers: [integer, numerator, denominator]. If there should be no integer, or no fraction resulting from simplification, just return zeros in their place.

There is a convenience function you can use called toString(integer, numerator, denominator). It also takes three integer values, and returns a string of the compound fraction for logging, etc.

For example:

// 4 3/2 (four and three halves)
simplify(4, 3, 2); // == [5, 1, 2]
// becomes 5 1/2 (five and one half)

// 15/12 (fifteen twelfths)
simplify(0, 15, 12); // == [1, 1, 4]
// becomes 1 1/4 (one and one quarter)
Note: Beware of 0 denominators and numerators.
*/

function simplify(i, num, den) {
    const prime = [2,3,5,7,11,13]
    
    if(den===0) num = 0
    if(num >= den && num > 0 && den > 0){
      i += Math.floor(num/den)
      num -= Math.floor(num/den) * den
    }
    
    if(num > 0 && den > 0){
      for(let j=0; prime[j]<=num && j<prime.length; j++){
        if(num % prime[j] === 0 && den % prime[j] === 0){
          num /= prime[j]
          den /= prime[j]
          j = -1
        }  
      }
    }
    
    if(num===0) den=0
    return [i,num,den]
}
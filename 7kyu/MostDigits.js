/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
    let max = array[0]
    array.forEach(n =>{
      if(n.toString().length > max.toString().length) max = n
    })
    return max
}
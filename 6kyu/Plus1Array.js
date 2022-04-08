/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

function upArray(arr){
    console.log(arr)
    if(arr.length === 0 || Math.max(...arr) > 9 || Math.min(...arr) < 0){
      return null
    }
    
    for(let i=arr.length-1; i>=0; i--){
      if(i===0 && arr[0]===9){
        arr[0] = 0
        arr.unshift(1)
        break
      }
      else if(arr[i] === 9){
        arr[i] = 0
      }
      else{
        arr[i]++
        break
      }
    }
    return arr
}
  
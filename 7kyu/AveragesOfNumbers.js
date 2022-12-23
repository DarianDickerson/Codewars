/*
#Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.
*/

function averages(numbers) {
    if(numbers === null || numbers.length < 2) return []
    
    let res = numbers.map((n,i)=>{
      if(i === numbers.length-1){
        return 0
      }
      return (n + numbers[i+1])/2
    })
    
    res.pop()
    return res
}
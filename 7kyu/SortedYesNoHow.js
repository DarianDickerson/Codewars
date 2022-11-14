/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let ascend = !array.some((n,i) =>{
      if(i === 0) return false
      else if(n >= array[i-1]) return false
      else return true
    })
    
    if(ascend) return "yes, ascending"
    
    ascend = !array.some((n,i) =>{
      if(i === 0) return false
      else if(n <= array[i-1]) return false
      else return true
    })
    
    if(ascend) return "yes, descending"
    return "no"
}
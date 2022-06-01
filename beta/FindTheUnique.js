/*
There is an array. All elements are the same except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 4, 4, 'foo', 4 ]) === 'foo'
It’s guaranteed that array contains more than 3 elements. Array may contain anything (including NaN).
*/

function findUniq(arr) {
    const reduced = [...new Set(arr)]
    let count0 = 0
    let count1 = 0
    
    for(let i=0; i<arr.length; i++){
      reduced[0] === arr[i] || (isNaN(reduced[0]) && isNaN(arr[i])) ? count0++ : count1++
      
      if(count0 > 1){
        return reduced[1]
      }
      else if(count1 > 1){
        return reduced[0]
      }
    }
}
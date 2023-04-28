/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.
*/

function mostFrequentItemCount(collection) {
    let count = new Map()
    let max = 0
    
    for(let i=0; i<collection.length; i++){
      if(count.has(collection[i])){
        count.set(collection[i], count.get(collection[i]) + 1)
      }
      else{
        count.set(collection[i],1)
      }
      
      if(count.get(collection[i]) > max) max = count.get(collection[i])
    }
    
    return max
}
/*
Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

Here's an example of the required output:

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]
*/

function groupIn10s() {
    let arr = [...arguments].sort((a,b)=>a-b)
    let groups = []
    
    let level = new Array()
    for(let i = 0; arr.length > 0 && i <= 10; i++){
      if(Math.floor(arr[0]/10) === i){
        level.push(arr[0])
        arr.shift()
        if(arr.length < 1){
          groups.push(level)
        }
        i--
      }
      else{
        level.length === 0 ? groups.length++ : groups.push(level)
        level = new Array()
      }
    }
    
    return groups
}
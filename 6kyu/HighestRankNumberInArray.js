/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
    const count = new Map()
    arr.forEach(n => count.has(n) ? count.set(n, count.get(n) + 1) : count.set(n,1))
    
    let max = 0
    let num = 0
    for (const [key, value] of count){
      if(value > max || (value === max && key > num)){
        max = value
        num = key
      }
    }
    return num
}
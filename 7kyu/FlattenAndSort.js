/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically.
*/

function flattenAndSort(array) {
    if(array.length === 1 ) return array[0].sort((a,b)=>a-b)
    if(array.length < 2) return array
    let flat = array[0].concat(array[1])
    
    for(let i=2; i<array.length; i++){
      flat = flat.concat(array[i])
    }
    
    return flat.sort((a,b)=>a-b)
}
/*
Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/

function arraysSimilar(arr1, arr2) {
    if(arr1.length === arr2.length){
      arr1= arr1.sort()
      arr2= arr2.sort()
      for(let i=0; i<arr1.length; i++){
        if(!(arr1[i] === arr2[i])){
          return false
        }
      }
    }
    else{
      return false
    }
    return true
}
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
    //PREP
    //Parameters
    //arr: non empty array
    
    //Filter the array by every other index
    return arr.filter((n,i) => i % 2 === 0)
}
  //Return
  //New Array with every other element of the previous array
  
  //Example
  console.log(removeEveryOther([1,2,3,4,5,6]))//[1,3,5]
/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

function squareOrSquareRoot(array) {
    //PREP
    //Parameters 
    //Array of int
    
    //Loop though array
    //check if each index has an integer square root
      //if so, replace in new array
      //else leave original araay index
    return array.map(n => Number.isInteger(n**.5) ? n**.5 : n**2)
}  
  
  //Return new array of int that modifies the original elements: 
  //if element has an int square root return it, else return the square 
    
  //Example
  console.log(squareOrSquareRoot([25,36,64,7,5,3]))//[5,6,8,49,25,9]
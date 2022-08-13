/*
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
*/

function partsSums(ls) {
    //PREP
    //Parameters
    //ls: array of numbers
    
    //Loop through array in reverse
      //Add current value to running sum
      //Add sum to front of new array
    
    let red = [0]
    let sum = 0
    for(let i=ls.length-1; i>=0; i--){
      sum += ls[i]
      red.unshift(sum)
    }
    return red
  }
  //Return 
  //Array numbers, sum of all values in the array after the index
  
  //Example
  console.log(partsSums([0,1,2,3,4,5]))//[15,15,14,12,9,5,0]
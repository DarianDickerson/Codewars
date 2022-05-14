/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
    //PREP
    //Parameters
    //a, b: ints, a is > b
    
    //Create a loop from a to b
      //Add every int into an array
    
    let res = []
    for(let i=a; i<=b; i++){
      res.push(i)
    }
    return res
}
  //Return
  //Array of all ints between a and b, inclusive
  
  //Example
  console.log(between(-2,2))//[-2,-1,0,1,2]
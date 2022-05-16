/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
*/

function findMultiples(integer, limit) {
    //PREP
    //Parameters
    //integer: int > 0, number to find multiples of
    //limit: int > integer > 0, largest number that should be included in resulting array
  
    //loop from integer to limit by intervals of integer
      //add each step to array
    let res = []
    for(let i=integer; i<=limit; i+=integer){
      res.push(i)
    }
    return res
}
  //Return 
  //Array of all positive ints that are a factor of integer <= limit
  
  //Example
  console.log(findMultiples(7,50))//[7,14,21,28,35,42,49]
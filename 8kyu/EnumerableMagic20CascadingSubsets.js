/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

function eachCons(array, n) {
	//PREP
  //Parameters
  //array: array of ints
  //n: int
  
  //Loop from 0 to array length - n
    //push array of digits length n
  let res = []
  for(let i=0; i<=array.length-n; i++){
    let temp = []
    for(let j=i; j<i+n; j++){
      temp.push(array[j])
    }
    res.push(temp)
  }
  return res
}
//Return
//array of arrays of ints, arrays are all sequences of length n from input array

//Example
console.log(eachCons([7,6,5,4,3,2],3))//[[7,6,5],[6,5,4],[5,4,3],[4,3,2]]
/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
    //PREP
    //Parameters
    //size: int > 0, size the string should be
    
    //Loop 0 to size
    //Add alternating 1 and 0 digits to string
    
    let res = ""
    for(let i=0; i<size; i++){
      if(i%2 === 0){
        res += "1"
      }else{
        res += "0"
      }
    }
    return res
}
  //Return 
  //String, of length "size" alternating 1 and 0 beginning with 1
  
  //Example
  console.log(stringy(7))//"1010101"
/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

function revrot(str, sz) {
    if(sz <= 0 || str === "" || sz > str.length){           //Check for bad cases
      return ""
    }
    
    let result = ""                                         //Create String to Add substrings to
  
    for(let i = sz; i<=str.length; i += sz){                //Loop iterates through str by size of the chunk(sz)
      
      let chunk = str.substring(i-sz,i).split("")           //Grab chunk and split into array
      
      //If Sum of the cubes of the chunk's digits is divisible by 2 reverse chunk
      //Same as if there are an odd number of odd numbers
      
      let odds = chunk.filter(val => Number(val) % 2 === 1) //Filter chunk by odd numbers
      
      if(odds.length % 2 === 0){                            //If even number of odd numbers
      
        result += chunk.reverse().join("")                  //Reverse the chunk array and join it back into a string to add to the result       
      }
      else{                                                 //Rotate substring chunk by one position
         
        chunk.push(chunk[0])                                //Add duplicate first element of chunk to the end of the array
        
        result += chunk.join("").substring(1, chunk.length) //Join array chunk into substring removing the first char so it appears rotated
      }
    }
  
    return result
}
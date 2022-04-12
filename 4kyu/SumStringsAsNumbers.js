/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) { 
    let arrL,arrS
    
    //find larger number and split both into arrays
    if(Number(a) > Number(b)){
      arrL = String(a).split("").map(n=>Number(n))
      arrS = String(b).split("").map(n=>Number(n))
    }else{
      arrL = String(b).split("").map(n=>Number(n))
      arrS = String(a).split("").map(n=>Number(n))
    }
    
    //Difference in lengths of arrays
    let szDiff = arrL.length - arrS.length
    
    //Add numbers digit by digit
    for(let i=arrL.length-1; i>=0; i--){
      //Stop at front of smaller number
      if(i - szDiff < 0){
        break
      }
      //Add same power of 10 digits of both arrays
      arrL[i] = arrL[i] + arrS[i - szDiff]
      
      //Sum is more than the allowed number of digits
      if(arrL[i] > 9){
        //Carry the one on front digit
        if(i===0){
          arrL[i] = arrL[i] % 10
          arrL.unshift(1)
        }
        //Carry the one
        else{
          arrL[i] = arrL[i] % 10
          arrL[i-1] += 1
        }
      }
    }
    
    //Get rid of leading zeros
    while(arrL[0]===0){
      arrL.shift()  
    }
    
    return arrL.map(n=>String(n)).join("")
}
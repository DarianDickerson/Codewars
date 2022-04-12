/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
    let num = a + b
    let stop = 0
    let binary = ""
    
    //Find highest 2 exponent
    for(let check = 0; num > 0 && Math.pow(2,check) < num; check++){
      stop = check
    }
    
    //Write Binary
    for(let i=stop ; i >= 0; i--){
      if(num - Math.pow(2,i) >= 0){
        binary += "1"
        num -= Math.pow(2,i)
      }else{
        binary += "0"
      }
    }
    
    return binary
}
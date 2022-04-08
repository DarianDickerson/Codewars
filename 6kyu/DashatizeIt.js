/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
    let dashed =""
    
    //Check if num is an Int
    if(Number.isInteger(num)){
      //Check if num is negative
      if(num < 0){
        num *= -1
      }
      
      num = String(num)
      //Check if number is single digit
      if(num.length === 1){
        return num
      }
      
      for(let i=0; i<num.length; i++){
        //Check if int is odd
        if(Number(num[i]) % 2 === 1){
          //Check if "-" is not needed before or after
          if(i === num.length -1 && dashed[dashed.length-1] === "-"){
            dashed += num[i]
          }
          //Check if "-" is not needed before number
          else if(i === 0 || (i > 0 && dashed[dashed.length-1] === "-")){
            dashed += num[i] + "-"
          }
          //Check if "-" is not needed after number
          else if( i === num.length -1 && dashed[dashed.length-1] !== "-" ){
            dashed += "-" + num[i]
          }
          else{
            dashed += "-" + num[i] + "-"
          }
        }
        else{
          dashed += num[i]
        }
      }
    }else{
      return "NaN"
    }
    return dashed
}
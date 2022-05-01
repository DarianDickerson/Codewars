/*
Jack's teacher gave him a ton of equations for homework. The thing is they are all kind of same so they are boring.

So help him by making a equation solving function that will return the value of x.

Test Cases will be like this:

# INPUT            # RETURN
'x + 1 = 9 - 2'    # 6
'- 10 = x'         # -10
'x - 2 + 3 = 2'    # 1
'- x = - 1'        # 1
All test cases are valid.
Every +, - and numbers will be separated by space.
There will be only one x either on the left or right.
x can have a - mark before it.
returned object will be a integer.
*/

function valueOfX(eq) {
    let arr = eq.split(" ")
    console.log("")
    console.log(arr.join(" "))
    
    //Move all integers from left side of the equation to the right
    for(let i=0; arr[i] != "="; i++){
      
      
      //Find integers
      if(Number.isInteger(Number(arr[i]))){
        //Check for sign before int
        if( i > 0 && arr[i-1] != "x" ){
          //Change symbol and move to other side of the equation
          (arr[i-1] === "+") ? arr.push("-") : arr.push("+")
          arr.push(arr[i])
          
          //Remove from front side of equation
          arr.splice(i-1,2)
          
          //Restart loop
          i=-1
        }
        //No Sign before int
        else{
          //Move int to right side of equation, give sign
          arr.push("-")
          arr.push(arr[i])
          
          //Remove int from left side of equation
          arr.splice(i,1)
          
          //Restart loop
          i=-1
        }
      }
    }
    
    console.log(arr.join(" "))
    
    //Move "x" to left side of equation
    if(arr[0] === "="){
      //If "x" is positive
      if(arr[arr.indexOf("x") -1] != "-"){
        
        //Switch all signs
        arr = switchSigns(arr)
        
        //Remove "x"
        if(arr[arr.indexOf("x")-1] === "-" || arr[arr.indexOf("x")-1] === "+" ){
          arr.splice(arr.indexOf("x")-1,1)
        }
        arr.splice(arr.indexOf("x"),1)
      }
      else{
        //Remove "x"
        arr.splice(arr.indexOf("x")-1,2)
      }
    }
    else if(arr[0] === "-"){
      arr.shift()
      arr.shift()
      
      arr = switchSigns(arr)
    }
    
      
    //Reduce to just right side
    arr.shift()
    if(arr[0] === "="){
      arr.shift()
    }
      
    console.log(arr.join(" "))
  
    
    return eval(arr.join(" "))
}
  
function switchSigns(arr){
    //switch all signs
    for(let i=1; i<arr.length; i++){
      if(arr[i] === "+"){
        arr[i] = "-"
      }
      else if(arr[i] === "-"){
          arr[i] = "+"
      }
    }
      
    //Switch sign of first number if it didnt have a sign      
    if(Number.isInteger(Number(arr[1]))){
      arr[0] = "-"
      arr.unshift("=")
    }
    return arr
}
/*
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

function dotCalculator (equation) {
	// +
  if(equation.includes("+")) return equation.split(" + ").join("")
  // -
  else if(equation.includes("-")){
    let dots = equation.split(" - ")
    if(dots[0].length === dots[1].length) return ""
    return dots[0].substring(0, dots[0].length - dots[1].length)
  }
  // *
  else if(equation.includes("*")){
    let dots = equation.split(" * ")
    let str = ""
    for(let i=0; i<dots[1].length; i++){
      str += dots[0]
    }
    return str
  }
  // //
  else{
    let dots = equation.split(" // ")
    let str = ""
    for(let i=0; i<Math.floor(dots[0].length / dots[1].length); i++){
      str += "."
    }
    return str
  }
}
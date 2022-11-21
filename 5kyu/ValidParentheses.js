/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(braces) {
    let open = []
      let pairs = {"{":"}", "[":"]","(":")"}
      
      for(let i=0; i<braces.length; i++){
        //Closed
        if(pairs[braces[i]] == null){
          if(i === 0 || pairs[open[0]] != braces[i]) return false
          open.shift()
        }
        
        //Open
        else{
          open.unshift(braces[i])
        }
      }
      
      return open.length === 0 
}
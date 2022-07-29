/*
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!
*/

function calculator(a,b,sign){
    const legal = "+-/*"
    if(!legal.includes(sign) || typeof a != "number" || typeof b != "number"){
      return "unknown value"
    }
    
    return eval( a.toString() + sign + b.toString())
}
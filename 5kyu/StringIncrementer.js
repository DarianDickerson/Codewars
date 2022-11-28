/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (str) {
    if(Number.isInteger(+str)) {
      let justNum = (+str + 1).toString()
      while(str.length > justNum.length){
        justNum = "0" + justNum
      }
      return justNum 
    }
      
    let i = str.split("").reverse().findIndex(j => !Number.isInteger(+j))
    if(i === -1) return str + "1"
    
    i = str.length - i
    let name = str.substring(0,i)
    let num = (+str.substring(i) + 1).toString() 
    
    while(str.length - name.length > num.length){
      num = "0" + num
    }
    
    return name + num
}
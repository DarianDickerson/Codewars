/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n){
    if(n < 1 || n % 2 === 0){
      return null
    }
    
    let diamond = []
    let stars = ""
    while(stars.length < n){
      stars += "*"
    }
    diamond.push(stars + "\n")
    stars = stars.split("")
  
    if(stars.length > 0){
      stars.pop()
    }
    if(stars.length > 0){
      stars.pop()
    }
    stars = stars.join("")
    
    for(let i=n-2; stars.length > 0; i-=2){
      let row = stars
      for(let j=(n-i)/2; j>0; j--){
        row = " " + row
      }
      row += "\n"
      diamond.push(row)
      diamond.unshift(row)
      stars = stars.split("")
      
      if(stars.length > 0){
        stars.pop()
      }
      if(stars.length > 0){
        stars.pop()
      }
      stars = stars.join("")
    }
    return diamond.join("")
}
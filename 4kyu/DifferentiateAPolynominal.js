/*
Create a function that differentiates a polynomial for a given value of x.

Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

Assumptions:
There will be a coefficient near each x, unless the coefficient equals 1 or -1.
There will be an exponent near each x, unless the exponent equals 0 or 1.
All exponents will be greater or equal to zero
Examples:
differenatiate("12x+2", 3)      ==>   returns 12
differenatiate("x^2+3x+2", 3)   ==>   returns 9
*/

function differentiate(e, x){
    return e.split("")
      .map((ch,i) => {
        if(ch === "-" && i!=0) return "+-"
        else if(ch === "x" && e[i+1] != "^" && !Number.isInteger(+e[i-1])) return "1x^1"
        else if(ch === "x" && e[i+1] === "^" && !Number.isInteger(+e[i-1])) return "1x"
        else if(ch === "x" && e[i+1] != "^") return "x^1"
        else return ch
      })
      .join("")
      .split("+")
      .map(p => p.split("x^"))
      .filter(p => p.length === 2)
      .reduce((a,c) => a + +c[0] * +c[1] * x**(+c[1]-1) ,0)
}
/*
When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

Write a function: simplify, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):

All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
"cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"


All monomials appears in order of increasing number of variables, e.g.:
"-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"

If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
"a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"

There is no leading + sign if the first coefficient is positive, e.g.:
"-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"

N.B. to keep it simplest, the string in input is restricted to represent only multilinear non-constant polynomials, so you won't find something like `-3+yx^2'. Multilinear means in this context: of degree 1 on each variable.

Warning: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.

Good Work :)
*/

function simplify(p){
    p = p.split("")
    let poly = {}
    let start = 0
    let res = ""
    
    //Check if there is a sign at the start
    if(p[0] != "-"){
      p.unshift("+")
    }
    
    //Cycle through array to Split into individual polynominals
    for(let i=1; i<=p.length; i++){
      //End of current poly
      if(i===p.length || p[i] === "+" || p[i] === "-"){
        //Isolate poly
        let chunk = p.slice(start,i)
        
        //Set start of next poly
        start = i
        
        //Find where numbers end and variables begin
        let index = chunk.findIndex(j => j!= "+" && j!="-" && !Number.isInteger(+j))
        
        //Check if leading value === 1
        if(index === 1){
          chunk.splice(1,0,"1")
          index++
        }
        
        let num = Number(chunk.slice(0,index).join(""))
        let key = chunk.slice(index).sort().join("")
        
        //Add Polynominal to Poly Object
        if (poly[key] == null ){
          poly[key] = num
        }
        else{
          poly[key] += num
        }
      }
    }
    
    //Rebuild equation
    Object.entries(poly)
        .sort((a,b)=>{
          if(a[0].length === b[0].length){
            for(let i=0; i<a[0].length; i++){
              if(a[0][i] != b[0][i]){
                return a[0].charCodeAt(i) - b[0].charCodeAt(i)
              }
            }
          }else{
            return a[0].length - b[0].length
          }
        })
        .forEach(n => {
          if(n[1] === 0){
            //Do nothing
          }
          else if(n[1] === 1){
            res += "+" + n[0]
          }
          else if(n[1] === -1){
            res += "-" + n[0]
          }
          else if(n[1] > 1){
            res += "+" + n[1] + n[0]
          }
          else{
            res += n[1] + n[0]
          }
    })
    
    return res[0] === "+" ? res.substring(1): res
}
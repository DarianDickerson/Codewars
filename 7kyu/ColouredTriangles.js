/*
You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.

The input string will only contain the uppercase letters R, G, B and there will be at least one letter so you do not have to test for invalid input.
If you are only given one colour as the input, return that colour.
Adapted from the 2017 British Informatics Olympiad
*/

function triangle(row) {
    if(row.length === 1){
      return row
    }
    let current = row
    let next = ""
    while(current.length > 1){
      for(let i=1; i<current.length; i++){
        let temp = current[i-1] + current[i]
        if(current[i] === current[i-1]){
          next += current[i]
        }
        else if(!temp.includes("R")){
          next += "R"
        }
        else if(!temp.includes("G")){
          next += "G"
        }
        else if(!temp.includes("B")){
          next += "B"
        }
      }
      current = next
      next = ""
    }
    return current
}
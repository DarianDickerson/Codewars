/*
To complete this kata you will have to finish a function that returns a string of characters which when printed resemble a Rubik's cube. The function is named cube, and it has one integer parameter (formal argument) n, for the dimensions of the cube.

For example, when I call the function cube(3) it will return a string which when printed appears as so:

  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
There are no spaces to the right of the cube edges (same above and below the cube), and it must work for all dimensions greater than, or equal to one (technically 1 x 1 x 1):

1 x 1 x 1

/\_\
\/_/
2 x 2 x 2

 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
 */

function cube(n) {
    let cube = []
    
    //Top depth
    let topSide = ""
    for(let i=0; i<n; i++){
      topSide += "_\\"
    }
    
    //Bottom depth
    let botSide = ""
    for(let i=0; i<n; i++){
      botSide += "_/"
    }
    
    //Top Face
    for(let i=1; i<=n; i++){
      let topTri = ""
      for(let j=0; j<i; j++){
        topTri += "/\\"
      }
      topTri += topSide + "\n"
      cube.push(topTri)
    }
    
    //Bottom Face
    for(let i=n; i>0; i--){
      let botTri = ""
      for(let j=0; j<i; j++){
        botTri += "\\/"
      }
      botTri += botSide
      if(i>1) botTri += "\n"
      cube.push(botTri)
    }
    
    let count = n-1
    for(let i=0; i<cube.length/2; i++){
      for(let j=0; j<count; j++){
        cube[i] = " " + cube[i]
        cube[cube.length-i-1] = " " + cube[cube.length-i-1]
      }
      count--
    }
    
    return cube.join("")
}
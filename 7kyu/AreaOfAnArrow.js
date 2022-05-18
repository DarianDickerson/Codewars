/*
Area of an arrow
An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

arrow

a and b are integers and > 0

Write a function which returns the area of the arrow.
*/

function arrowArea(a,b) {
    //PREP
    //Parameters
    //a: int > 0, base of triangle
    //b: int > 0, twice the height of triangle
    
    //areaTriangle = 1/2 base * height
    //height = b / 2
    return .25 * a * b 
}
  //Return
  //Number: Area of the triangle
  
  //Example
  console.log(arrowArea(4,4))//4
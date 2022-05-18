/*
Perimeter sequence
The first three stages of a sequence are shown.

blocks

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
*/

function perimeterSequence(a,n) {
    //PREP
    //Parameters
    //a: Number >= 1, length of one side of a block
    //b: Int >= 1, units long the base of the shape is
  
    //perimeter = unitLength * numUnits * sides
    return a * n * 4
}
  //Return
  //Number, perimeter of the shape
  
  //Example
  console.log(perimeterSequence(7,12))//336
/*
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/

// Return the nth triangular number
function triangular( n ) {
    //PREP
    //Paremeters
    //n: int, place in the sequece we want to return
    
    //n + n-1 + n-2 ... 0
    
    if(n<1){return 0}
    return n * (.5 * n + .5)
}
  //Return
  //Int: value in the nth spot in the series
  
  //Example
  console.log(triangular(10))//15
  //1  2  3  4  5  6  7  8  9  10  11 
  //1 1.5 2 2.5 3 3.5 4 4.5 5 5.5  6                               
  //1  3  6 10 15 21 28 36 45  55  66 
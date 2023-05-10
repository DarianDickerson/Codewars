/*
In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
*/

function sortByArea(array) {
    return array.map(dumb=>dumb).sort((a,b)=>{
      return area(a) - area(b)
    })
}
  
function area(item){
    if(Array.isArray(item)){
      return item[0] * item[1]
    }
    return Math.PI * item * item
}
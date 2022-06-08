/*
Here you will create the classic Pascal's triangle.
Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

The triangle should be returned as a nested array. For example:

pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

      1
    1   1
  1   2   1
1   3   3   1
*/

function pascal(depth) {
    let pyr = [[1]]
    for(let i=2; i<=depth; i++){
      let level = new Array()
      for(let j=0; j<i; j++){
        let prev = pyr[pyr.length-1]
        if(j === 0){
          level.push(prev[j])
        }else if(j === i-1){
          level.push(prev[j -1])
        }else{
          level.push(prev[j] + prev[j -1])
        }
      }
      pyr.push(level)
    }
    return pyr
}
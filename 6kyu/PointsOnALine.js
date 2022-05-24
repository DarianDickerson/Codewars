/*
Given some points (cartesian coordinates), return true if all of them lie on a line. Treat both an empty set and a single point as a line.

onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
onLine([[1,2], [-3, -14], [22, 9]]);              // returns false
*/

function onLine(points) {
    if(points.length < 3){
      return true
    }
    
    let double = new Set()
    let dots = points.filter(pair => {
      if(!double.has(String(pair[0])+String(pair[1]))){
        double.add(String(pair[0])+String(pair[1]))
        return pair
      }
    })
    
    //m = (y2 - y1) / (x2 - x1)
    let m = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0])
    for(let i=2; i<dots.length; i++){
      let slope = (dots[i][1] - dots[i-1][1]) / (dots[i][0] - dots[i-1][0])
      if(slope != m){
        return false
      }
    }
    return true
}
/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). */

function slope(p){
    //y2 - y1 / x2 -x1
    let x = p[2]-p[0], 
        y = p[3]-p[1]
    if(x === 0){
      return "undefined"
    }else{
      return (y/x).toString()
    }
}
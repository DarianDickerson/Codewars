/*
You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0
Examples with 3 and 4 lines
*/

// You are given an input (n) which represents the amount of lines you are given.
// Your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.
function maxBisectors(n) {
    return n % 2 === 0 ? (n/2)**2 : Math.ceil(n/2) * Math.floor(n/2)
  }
  
  // 0 0 1 2 4 6 9 12 16
  // 0 1 2 3 4 5 6 7  8
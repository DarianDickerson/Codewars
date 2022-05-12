/*
Task
There are n houses in a village on a circular road numbered from 1 to n starting from some house in clockwise order. It takes one minute to get from one house to any of two adjacent houses and there are no other roads in this village besides the circular one. Find the minimal time required to make all visits in the desired order starting from house 1.

Input/Output
[input] integer n

The number of houses, positive integer.

2 ≤ n ≤ 20.

[input] integer array visitsOrder

An array of integers (each from 1 to n, inclusive) representing the order in which you have to visit the houses.

1 ≤ visitsOrder.length ≤ 20,

1 ≤ visitsOrder[i] ≤ n.

[output] an integer

The minimal time required to make all visits in the desired order starting from house 1.

Example
For n = 4 and visitsOrder = [1, 3, 2, 3, 1],

the output should be 6.
*/

function visitsOnCircularRoad(n, visitsOrder) {
    let pos = 1
    let sum = 0
    visitsOrder.forEach(h=>{
      if(pos === h){
        sum += 0
      }
      else if(pos > h){
        if(pos-h < n-pos+h){
          sum += pos-h
        }else{
          sum += n-pos+h
        }
      }else{
        if(h-pos < n-h+pos){
          sum += h-pos
        }else{
          sum += n-h+pos
        }
      }
      pos = h
    })
    return sum
}
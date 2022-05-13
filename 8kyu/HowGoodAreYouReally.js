/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
    //PREP
    //Parameters 
    //classPoints: array of numbers
    //yourPoints: number
    
    //Find the average
    //loop through classPoints and add all numbers
    //add yourPoints to sum of classPoints
    //divide sum by length of classPoints + 1(yourPoints)
    //Compare average to yourPoints
    //return true if greater, false if less than or equal
    
    return ((classPoints.reduce((a,c)=> a+c,0) + yourPoints)/(classPoints.length + 1) < yourPoints)
}
  //Return 
  //Boolean if yourPoints > average of classPoints & yourPoints
  
  //Example:
  console.log(betterThanAverage([1,2,3,4,5], 3))//false
/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score( dice ) {
    //PREP
    //Parameters
    //dice: Array of ints, 1-6, dice values
    
    //Set up way to track how many of each number there are
    //loop through each number add their score, triplets first then singles
    
    let sum = 0
    let nums = {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0}
    dice.forEach(n => nums[n.toString()] += 1)
    
    for(let i=1; i<=6; i++){
      if(nums[i.toString()] >= 3){
        if(i===1){
          sum += 1000
        }else{
          sum += i * 100
        }
        nums[i.toString()] -= 3
      }
      if(i===1){
        sum += nums[i.toString()] * 100
      }else if(i===5){
        sum += nums[i.toString()] * 50
      }
    }
    return sum
}
  //Return 
  //Int, Score of dice roll
  
  //Example
  console.log(score([5,5,5,1,5]))//650
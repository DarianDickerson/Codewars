/*
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
  */

function battle(x, y) {
    const points = new Map()
    let xScore = 0
    let yScore = 0
    
    for(let i=1; i <= 26; i++){
      points.set(String.fromCharCode(64 + i),i)
    }
    
    for(let i=0; i < x.length; i++){
      xScore += points.get(x[i])
    }
    
    for(let i=0; i < y.length; i++){
      yScore += points.get(y[i])
    }
    
    if(xScore > yScore){
      return x
    }else if (yScore > xScore){
      return y
    }else if (xScore == yScore){
      return "Tie!"
    }
}
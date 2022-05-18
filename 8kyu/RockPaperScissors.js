/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
    const choice = ["paper","scissors","rock"]
    
    if(p1 === p2){
      return "Draw!"
    } 
    else if((choice.indexOf(p1)+1) % 3 === choice.indexOf(p2)){
      return "Player 2 won!"
    }
    else{
      return "Player 1 won!"
    }
}
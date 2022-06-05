/*
Connect Four
Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
*/

function whoIsWinner(pPList){
    //Board
    let board = [[],[],[],[],[],[],[]]
    const abc = "ABCDEFG" 
    
    for(let turn in pPList){
      //Push to board
      let vals = pPList[turn].split("_")
      board[abc.indexOf(vals[0])].push(vals[1])
    
      if(turn > 5){
        let win = 1
        let color = vals[1]
        let col = abc.indexOf(vals[0])
        let row = board[col].length-1
  
        //check vertical
        if( board[col].length > 3){
          //Check if the last 4 vertical spaces are the same
          for(let r= board[col].length-2; r >= 0; r--){
            if(board[col][r] !== color){
              break
            }else{
              win++
            }
          }
        }
        if(win === 4){ 
          return color
        } 
  
  
        //check horizontal
        win=1
        //Check matching pieces to the right
        for(let c= col+1; c < 7; c++){
          if(row > board[c].length-1 || board[c][row] !== color){
              break
          }else{
              win++
          }
        }
        //Check matching pieces to the left
        for(let c= col-1; c >= 0; c--){
          if(row > board[c].length-1 || board[c][row] !== color){
              break
          }else{
              win++
          }
        }
        //Check if there are 4 in a row
        if(win >= 4){
          return color
        }
  
  
        //Check Diagonal(Negative Slope)
        win = 1
        //Check matching pieces down and to the right
        let r = row + 1
        for(let c = col + 1; c < 7; c++){
          if( c === 7 || r === 6 || board[c][r] !== color){
              break
          }else{
              win++
              r++
          }
        }
        //Check matching pieces up and to the left
        r = row - 1
        for(let c = col - 1; c < 7; c--){
          if(c === -1 || r === -1 || board[c][r] !== color){
              break
          }else{
              win++
              r--
          }
        }
        //Check if there are 4 in a row
        if(win >= 4){
          return color
        }
        
        
        //Check Horizontal (Positive Slope)
        win = 1
  
        //Check matching pieces up and to the right
        r = row - 1
        for(let c = col + 1; c < 7; c++){
          if(c === 7 || r === -1 || board[c][r] !== color){
              break
          }else{
              win++
              r--
          }
        }
        //Check matching pieces down and to the left
        r = row + 1
        for(let c = col - 1; c < 7; c--){
          if(c === -1 || r === 6 || board[c][r] !== color){
              break
          }else{
              win++
              r++
          }
        }
        //Check if there are 4 in a row
        if(win >= 4){
          return color
        }
      }
    }
    return "Draw"
  }
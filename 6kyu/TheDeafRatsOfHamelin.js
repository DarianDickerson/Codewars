/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function(town) {
    let rats = town.split("").filter(r=> r!=" ").join("").split("P")
    let deaf = 0
    
    rats.forEach((r,i) =>{
      for(let j=1; j<r.length; j+=2){
        if(r[j] === "~" && i === 0){
          deaf++
        }
        else if(r[j] === "O" && i === 1){
          deaf++
        }
      }
    })
    
    return deaf
}
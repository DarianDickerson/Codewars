/*
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

function colourAssociation(array){
    let res = []
    array.forEach(c => {
      let push = new Object()
      push[c[0]] = c[1]
      res.push(push)
    })
    
    return res
}


//Editied 
function colorAssociation(array){
    return array.map(c => {
      let ob = new Object()
      ob[c[0]] = c[1]
      return ob
    })
}
/*
Meet Khan, he own a carnival in Nomad Country.
In Nomad Country there are 26 large groups of people who stay in 1 place for a period of time before moving again to a random location.
For many periods of times, Khan always stay in the same location and waiting for people (by luck) to come and settle at his carnival location.

This time Khan decides to visit those 26 groups instead of waiting for them to come to his carnival, hoping to get more money (or gain more barter opportunity).

As Khan told by his friends you are a great programmer, he then come to you and asked you to create a program that: given a starting location and a list of those 26 groups location, the program could generate an ordered list of groups he should visit from one location to another location after that.

The starting location will have the same structure as the rest of the group within the list given, example like below:

{
  name: "",
  coordX: 0,
  coordY: 0
}
// Starting Location always have "." as a name
// While the groups will have name from "A" to "Z"
// Coordinate of X and Y will always be random between -100 and 100
He use very simple rule to determine which location he should visit next, which is the nearest one from where he stand but not the location he has visited before.
You've been told by Khan to use the Eucledian Distance formula, but after showing him the result of the calculation he doesn't like the number, he told you to round up the result so he could be extra prepared if the distance is longer than he expected.
When he is faced with more than 1 nearest destination, he believe that he should visit the group whose name came up first in alphabetical order from "A" to "Z".
Take a look of example locations and steps below:

startingLocation = {
  "name": ".",
  "coordX": 93,
  "coordY": 48
}
groups = [
  {"name": "S", "coordX": 75, "coordY": 25},
  {"name": "J", "coordX": 71, "coordY": 19},
  {"name": "Z", "coordX": 50, "coordY": 13},
  {"name": "G", "coordX": 56, "coordY": 4},
]
// With the function to calculate distance is
// already written, you need to calculate each
// distance starting from startingLocation and
// determine where to go next.
// 
// Starting from "." and calculating the distance
// between "." to the other 4 groups will result "S"
// with the distance of 30 is the nearest, therefore
// "S" is the next location to visit.
//
// At location "S", calculating the distance to the
// next 3 location will result "J" with the distance
// of 8 is the nearest, therefore "J" is the next
// location to visit.
//
// At location "J", calculating the distance to the
// next 2 location will result both "Z" and "G" have
// the same distance of 22, considering letter "G"
// comes before "Z", therefore "G" is the next
// location to visit.
//
// And so on...
Khan also doesn't want the information he already have beforehand (such as location), instead he want the distance for each travel to be included in the list, so he can prepare himself for how long he will be travelling.
He gave you an example like this:

[
  {"from":".", "to":"S", "distance":30},
  {"from":"S", "to":"J", "distance":8},
  {"from":"J", "to":"G", "distance":22},
  {"from":"G", "to":"Z", "distance":11}
]
As you aware there's no number ordering the list, Khan told you he prefer the list to be top to down ready, so he can simply put a strike-through when he reach his destination.

The success of Khan's Carnival travel plan now is in your hand.
Good Luck.
*/

function calculateDistance(a, b) {
    // This is the formula told by Khan.
    // He says "You may alter it as long
    // as it produces the same result".
    return Math.ceil(Math.sqrt(Math.pow(b.coordX - a.coordX, 2) + Math.pow(b.coordY - a.coordY, 2)))
}
  
function createRoutes(start, groups) {
    let visited = []
    let route = []
    let lowDist = calculateDistance(start,groups[0])
    let lowPer = groups[0]
    let pos = start
    let ordered = groups.sort((a,b)=> a.name.charCodeAt(0) - b.name.charCodeAt(0))
    
    for(let i=0; i<ordered.length; i++){
      //Finds smallest distance
      for(let j=0; j<ordered.length; j++){
        if(!visited.includes(ordered[j].name)){
          if(lowDist > calculateDistance(pos,ordered[j])){
            lowDist = calculateDistance(pos,ordered[j])
            lowPer = ordered[j]
          }
        }
      }
      visited.push(lowPer.name)
      route.push({from: pos.name, to: lowPer.name, distance: lowDist})
      pos = lowPer
      lowPer = null
      lowDist = 1000
    }
    return route
}
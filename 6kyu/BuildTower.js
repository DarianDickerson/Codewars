/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
    let tower = []
    for(let i = 0; i<nFloors; i++){
      let floor = "*"
      for(let j=1; j<nFloors; j++){
        let ch
        (j <= i) ? ch = "*" : ch = " "
        floor = ch + floor + ch
      }
      tower.push(floor)
    }
    return tower
}
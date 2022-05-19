/*
Build Tower Advanced
Build Tower by the following given arguments:
number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))

Tower block unit is represented as *

Python: return a list;
JavaScript: returns an Array;
Have fun!

for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below

[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]
*/

function towerBuilder(nFloors, block) {
    let tower = []
    let space ="", stars=""
    for(let l=0;l<block[0]; l++){
      space += " "
      stars += "*"
    }
    
    
    for(let i = 0; i<nFloors; i++){
      let floor = stars
      for(let j=1; j<nFloors; j++){
        let ch
        (j <= i) ? ch = stars : ch = space
        floor = ch + floor + ch
      }
  
      for(let k=0; k<block[1]; k++){
        tower.push(floor)
      }
    }
    return tower
}
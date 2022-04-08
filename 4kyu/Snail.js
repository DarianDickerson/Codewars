/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

snail = function(array) {
    /*[a, b, c, d, e]
      [p, q, r, s, f]
      [o, x, y, t, g]
      [n, w, v, u, h]
      [m, l, k, j, i]*/
    
    let distance = array[0].length
    let pass = 1
    let count = 0
    let direction = "E"
    const pos = [0,-1]
    const path = []
    const compass = ["E","S","W","N"]
    
    while(distance > 0){
      while(pass > 0){
        direction = compass[count%4]
        for(let i=0; i<distance; i++){
          switch (direction){
            case "N":
              pos[0] -= 1
              break
            case "S":
              pos[0] += 1
              break
            case "E":
              pos[1] += 1
              break
            case "W":
              pos[1] -= 1
              break
          }
          path.push(array[pos[0]][pos[1]])
        }
        pass--
        count++
      }
      distance--
      pass = 2
    }
    return path
}
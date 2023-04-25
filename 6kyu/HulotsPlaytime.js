/*
Story
As a child, Mr. Hulot was a happy boy who loved playing games all by himself. He used to walk around in the city by nightfall, and when he saw an interesting building, he would take pictures of it from different angles. He would then go home and try to figure out how many rooms were lit, based on the windows that are lit on the pictures.

Task
"Given an array of pictures takes from a building at nightfall, can you help little Hulot figure out how many rooms were lit?"
Input
pictures
a 3d-array containing 4 pictures, one for each side of a building in the following order, facing: North, West, South, East (assume all buildings are blocks with 4 sides)
each picture is a 2d-array containing bits, each representing a window at the associated row and column, that shows a room that is either lit 1 or not 0.
each room has 1 window for every side that it is anchored to
each room has a size of 1 unit in height, width and length
rooms do not let light pass to other rooms, there are walls between them
Output
return a non negative integer with the number of rooms that were lit in the building
we only care about rooms that Hulot could see, so no rooms inside the building without a window to look outside
Directions
When looking down at the building from a helicopter, we get the following directions.
    N

   +--+
W  |  |  E
   +--+
 
    S
Examples
The examples show each of the 4 sides of a building from a slight perspective, to give an idea about the architecture of the building.
Open Studio
pictures: [[[1]], [[1]], [[1]], [[1]]]
return: 1

North    

 +---+
+---+| 
| 1 |+
+---+

West    

 +---+
+---+| 
| 1 |+
+---+

South    

 +---+
+---+| 
| 1 |+
+---+

East    

 +---+
+---+| 
| 1 |+
+---+
Exclusive Lofts
pictures: [[[1],[0],[0]], [[1],[0],[0]], [[1],[0],[0]], [[1],[0],[0]]]
return: 1

North    

 +---+
+---+| 
| 1 ||
| 0 ||
| 0 |+ 
+---+

West    

 +---+
+---+| 
| 1 ||
| 0 ||
| 0 |+ 
+---+

South    

 +---+
+---+| 
| 1 ||
| 0 ||
| 0 |+ 
+---+

East    

 +---+
+---+| 
| 1 ||
| 0 ||
| 0 |+ 
+---+
Half Open Studios
pictures: [[[1, 1, 0]], [[0]], [[0, 1, 1]], [[1]]]
return: 2

North    

 +---------+
+---------+| 
| 1  1  0 |+
+---------+

West    

    +---+ 
  +---+ | 
+---+   +
| 0 | +
+---+

South    

 +---------+
+---------+| 
| 0  1  1 |+
+---------+

East    

    +---+ 
  +---+ | 
+---+   +
| 1 | +
+---+
Lofts
pictures: [[[1, 1, 0], [1, 0, 1]], [[0], [1]], [[0, 1, 1], [1, 0, 1]], [[1], [1]]]
return: 4

North    

 +---------+
+---------+| 
| 1  1  0 ||
| 1  0  1 |+
+---------+

West    

    +---+ 
  +---+ | 
+---+   |
| 0 |   +
| 1 | + 
+---+

South    

 +---------+
+---------+| 
| 0  1  1 ||
| 1  0  1 |+
+---------+

East    

    +---+ 
  +---+ | 
+---+   |
| 1 |   +
| 1 | + 
+---+
Studios
pictures: [[[1, 0]], [[0, 1]], [[1, 1]], [[1, 1]]]
return: 3

North    

  +------+ 
+------+ | 
| 1  0 | +
+------+

West    

  +------+ 
+------+ | 
| 0  1 | +
+------+

South    

  +------+ 
+------+ | 
| 1  1 | +
+------+

East    

  +------+ 
+------+ | 
| 1  1 | +
+------+
Appartments
pictures: [[[1, 1], [1, 0]], [[1, 1, 1], [0, 1, 1]], [[1, 0], [1, 0]], [[0, 1, 1], [0, 1, 1]]]
return: 9

North    

    +------+ 
  +------+ | 
+------+   | 
| 1  1 |   +
| 1  0 | +
+------+

West    

  +---------+ 
+---------+ | 
| 1  1  1 | | 
| 0  1  1 | +
+---------+

South    

    +------+ 
  +------+ | 
+------+   | 
| 1  0 |   +
| 1  0 | +
+------+

East    

  +---------+ 
+---------+ | 
| 0  1  1 | | 
| 0  1  1 | +
+---------+
*/

function countRooms(pictures) {
    const count = a => String(a).match(/1/g)?.length ?? 0;
    const small = pictures.findIndex(r => r[0].length == 1) + 1;
    if (small) return count(pictures[small]);
    return count(pictures.map(v => v.map(r => r.slice(1))));
}
/*
You have an array or list of coordinates or points (e.g. [ [1, 1], [3, 4], ... , [5, 2] ]), and your task is to find the area under the graph defined by these points (limited by x of the first and last coordinates as left and right borders, y = 0 as the bottom border and the graph as top border).

Notes:

x can be negative;
x of the next pair of coordinates will always be greater then previous one;
y >= 0;
the array will contain more than 2 coordinates.
Example
x=1 (left border)               x=5 (right border)
|                      x,y      |
|                    /\         |
|                   /  \        |
|    x,y           /    \       |
|   /\            /      \      |
|  /  \    x,y   /        \     |
| /    \  /\    /          \    |
|/      \/  \  /            \   |
|x,y    x,y  \/              \  |
|            x,y              \ | 
|_____________________________ \x,y_____ y=0 (bottom border)
The required area:

|                               |
|                    /\         |
|                   /\\\        |
|                  /\\\\\       |
|   /\            /\\\\\\\      |
|  /\\\          /\\\\\\\\\     |
| /\\\\\  /\    /\\\\\\\\\\\    |
|/\\\\\\\/\\\  /\\\\\\\\\\\\\   |
|\\\\\\\\\\\\\/\\\\\\\\\\\\\\\  |
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ | 
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|
*/

function findArea(points) {
    let sum = 0
    for(let i=1; i<points.length; i++){
      //y = mx + b
      //m = (y2-y1)/(x2-x1)
      let m = (points[i].Y - points[i-1].Y) / (points[i].X - points[i-1].X)
      //b = y - mx
      let b = points[i].Y - m * points[i].X
      
      //integrate mx + b
      //(mx^2)/2 + bx
      //finish - start
      sum += (m *(points[i].X **2)/2 + (b*points[i].X)) - (m *(points[i-1].X**2)/2 + (b*points[i-1].X))
    }
    return Math.round(sum * 10)/10
}
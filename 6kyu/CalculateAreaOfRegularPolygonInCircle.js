/*
Write the following function:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.

Input :: Output Examples

areaOfPolygonInsideCircle(3, 3) // returns 11.691

areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

areaOfPolygonInsideCircle(4, 5) // returns 38.042
*/

function areaOfPolygonInsideCircle(r, s) {
    let angle = ((s-2) * 180 / s)/2
    angle *= (Math.PI/180)
    let adjacent = r * Math.cos(angle)
    let opposite = r * Math.sin(angle)
    
    //1/2bh
    return adjacent * opposite
}
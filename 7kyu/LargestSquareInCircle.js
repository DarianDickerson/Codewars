/*
Determine the area of the largest square that can fit inside a circle with radius r.
*/

function areaLargestSquare(r) {
    return Math.round(((r * Math.sin(45 * Math.PI /180))* 2) **2)
}
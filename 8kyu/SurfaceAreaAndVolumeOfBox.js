/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth){
    let area = (width * height * 2) + (width * depth * 2) + (height * depth * 2)
    let vol = width * height * depth
    return [area,vol]
}
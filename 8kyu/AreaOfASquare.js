/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

function squareArea(A){
    //c = 2(pi)r
    //A = 2(pi)r/4
    let r = 4 * A/ (2 * 3.141592)
    r =(Math.pow(r,2))
        
    return Math.round(r *100)/100
}
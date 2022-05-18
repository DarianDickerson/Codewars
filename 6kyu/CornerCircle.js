/*
Corner circle
A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.

circles
What is the radius of the smaller circle, rounded to two decimal places?
*/

function cornerCircle(r) {
    //h=r+x 
    //o=r-x
    //a=r-x
    
    //sin(Pi/4) = (r-x)/(r+x)
    //(r+x)sin(Pi/4) = r - x
    //rsin(Pi/4) + xsin(Pi/4) = r -x
    //x + x(sin(Pi/4)= r - rsin(Pi/4)
    //x(1+sin) = r(1-sin)
    //x = r(1-sin(PI/4))/(1+sin(Pi/4))
    return +(r * (1 - Math.sin(Math.PI/4)) / (1 + Math.sin(Math.PI/4))).toFixed(2)
}
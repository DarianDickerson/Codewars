
/*
We want to approximate the length of a curve representing a function y = f(x) with a <= x <= b. First, we split the interval [a, b] into n sub-intervals with widths h1, h2, ... , hn by defining points x1, x2 , ... , xn-1 between a and b. This defines points P0, P1, P2, ... , Pn on the curve whose x-coordinates are a, x1, x2 , ... , xn-1, b and y-coordinates f(a), f(x1), ..., f(xn-1), f(b) . By connecting these points, we obtain a polygonal path approximating the curve.

Our task is to approximate the length of a parabolic arc representing the curve y = x * x with x in the interval [0, 1]. We will take a common step h between the points xi: h1, h2, ... , hn = h = 1/n and we will consider the points P0, P1, P2, ... , Pn on the curve. The coordinates of each Pi are (xi, yi = xi * xi).

The function len_curve (or similar in other languages) takes n as parameter (number of sub-intervals) and returns the length of the curve.

alternative text

Note:
When you "Attempt" tests are done with a tolerance of 1e-06 (except in PureScript where you must truncate your result to 9 decimal places).
*/

function lenCurve(n) {
    //PREP
    //Parameters
    //n: integer >= 0 denoting the number of segments the curve will be split into
    //
    
    //Divide interval into n segments
    //Loop that runs n times
      //find the end points of the line segments
      //Dermine Length of each segment
      //Add to sum
    
    let sum = 0
    let seg = 1/n
    let x1= 0, x2 = 1/n
    for(let i=0; i<n; i++){
      //Distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2)
      sum += Math.sqrt((x2-x1)**2 + ((x2*x2)-(x1*x1))**2)
      x1 += seg
      x2 += seg
    }
    return sum
}
  //Result
  //Number with tolerance of 1e-06 giving an approximation of the length of the curve
  
  //Example
  console.log(lenCurve(7)) //1.477421
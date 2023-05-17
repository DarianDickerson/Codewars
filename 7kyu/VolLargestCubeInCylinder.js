/*
Task

Find the volume of the largest cube that will fit inside a cylinder of given height h and radius r.

Don't round your result. The result needs to be within 0.01 error margin of the expected result.

HINT: There are two cases to consider. Will it be the cylinder's height or the cylinder's radius that determines the maximum size of your cube? An if/else statement might be useful here.

Examples

cubeVolume(3,7);     //27
cubeVolume(11,5);    //353.55
*/

function cubeVolume(h, r) {
    // Own a Pringles can? Desperately trying to get a 
    // cube into it? Thought so. This is the kata for you.
    
    let circ = (Math.sin(Math.PI/4) * r * 2)**3
    let leng = h**3
    
    return circ < leng ? circ : leng
}
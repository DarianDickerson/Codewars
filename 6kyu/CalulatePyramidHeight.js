/*
Your task is to calculate the maximum possible height of a perfectly square pyramid (the number of complete layers) that we can build, given 'n' number of cubes as the argument.

The top layer must always have only 1 cube and is always present.

If you were given only 5 cubes, the lower layer would have 4 cubes and the top 1 cube would sit right in the middle of them, where the lower 4 cubes meet.

The layers are thus so built that the corner cube always covers the inner 25% of the corner cube below it and so each row has one more cube than the one below it.

If you were given 14 cubes, you could build a pyramid of 3 layers, but 13 wouldn't be enough as you would be missing one cube, so only 2 layers would be complete and some cubes left over!

There are no hollow areas, meaning each layer must be fully populated with cubes.

What is the tallest pyramid possible we can build from the given number of cubes?

4 should return 1, 5 should return 2, 13 should return 2, 14 should return 3

Simply return the number of complete layers.
*/

var pyramidHeight = function(n){
    let layers = 0
    for(let i=1; n>0; i++){
      if(n - i**2 >=0){
        n -= i**2
        layers++
      }else{
        break
      }
    }
    return layers
}
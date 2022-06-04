/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

// Return the output array, and ignore all non-op characters
function parse( data ){
  let num = 0
  let res = []
  data.split("").forEach(ch => {
    switch (ch){
        case "i":
          num++
          break
        case "d":
          num--
          break
        case "s":
          num = num**2
          break
        case "o":
          res.push(num)
          break
        default:
          break
    }
  })
  return res
}
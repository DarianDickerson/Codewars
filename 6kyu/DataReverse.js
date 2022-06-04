/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/

function dataReverse(data) {
    if(data.length <8){
      return []
    }
    let sliced = []
    for(let i=0; i<data.length; i+=8){
      sliced.push(data.slice(i,i+8))
    }
    sliced = sliced.reverse()
    let res = sliced[0]
    
    for(let i=1; i<sliced.length; i++){
      res = res.concat(sliced[i])
    }
    
    return res
}
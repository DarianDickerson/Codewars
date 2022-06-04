/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function encode(string) {
    string = string.replace(/a/g,"1")
    string = string.replace(/e/g,"2")
    string = string.replace(/i/g,"3")
    string = string.replace(/o/g,"4")
    string = string.replace(/u/g,"5")
    return string
}
  
function decode(string) {
    string = string.replace(/1/g,"a")
    string = string.replace(/2/g,"e")
    string = string.replace(/3/g,"i")
    string = string.replace(/4/g,"o")
    string = string.replace(/5/g,"u")
    return string
}
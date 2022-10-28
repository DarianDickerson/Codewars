/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(num) {
    let n
    if(num[0] === num[1]) n = num[0]
    else if(num[0] === num[2]) n = num[0]
    else n = num[1]
    return num.find(i => i != n)
}

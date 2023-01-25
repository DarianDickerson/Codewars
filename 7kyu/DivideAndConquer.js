/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

function divCon(x){
    let str = x.filter(n => typeof n === "string").reduce((a,c)=> a + +c,0) 
    let num = x.filter(n => typeof n === "number").reduce((a,c)=> a + c,0)
    return num - str
}
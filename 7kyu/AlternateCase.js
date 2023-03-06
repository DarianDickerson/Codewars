/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
    let lower = "abcdefghijklmnopqrstuvwxyz"
    
    return s.split("").map(ch => lower.includes(ch) ? ch.toUpperCase() : ch.toLowerCase()).join("")
}
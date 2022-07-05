/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter){
    const abc = " abcdefghijklmnopqrstuvwxyz"
    return `Position of alphabet: ${abc.indexOf(letter)}`
}
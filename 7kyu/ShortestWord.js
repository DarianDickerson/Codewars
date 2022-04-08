/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    let shortest = 10000 
    s.split(" ").forEach(n=> n.length < shortest ? shortest = n.length : shortest=shortest)
    
    return shortest
}
/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
*/

function nearestSq(n){
    let floor = Math.floor(Math.sqrt(n))**2 
    let ceil = Math.ceil(Math.sqrt(n))**2
    
    return n-floor < ceil-n ? floor : ceil
}
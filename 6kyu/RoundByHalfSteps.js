/*
Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5
*/

function solution(n){
    let dec = Math.round((n % 1) * 1000000000000)/1000000000000
    let res = Math.floor(n)
    
    if(dec < .25) return res
    else if(dec < .5) return res + .5
    else if(dec < .75) return res + .5
    else return res + 1
}
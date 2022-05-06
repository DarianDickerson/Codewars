/*
No one enjoys carrying around spare change. And to avoid all that jingling it's absolutely necessary to have an efficient algorithm to calculate the minimum number of coins needed to pay for something. So given a set of coin denominations determine the fewest number of coins required to add up to a given amount.

For example: US Currency includes the penny, nickel, dime and quarter or the coins with denominations: [1, 5, 10, 25] If I were to ask you to make 75 cents you would return 3 since 75 cents can be made with 3 quarters.

NOTES:

The coin denominations will contain at least one coin and will be greater than zero. [3] or [1, 100, 19] are both valid.
All amounts given will be solvable.
Be greedy...
*/

function coinsNeeded(amount, coinDenominations) {
    let cd = coinDenominations.sort((a,b)=>(b-a))
    let coins = 0
    for(let i=0; i<cd.length; i++){
      coins += Math.floor(amount/cd[i])
      amount = amount % cd[i]
    } 
    return coins
}
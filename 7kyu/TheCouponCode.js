/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    console.log(enteredCode, correctCode, currentDate,expirationDate)
    if(enteredCode != correctCode) return false
    
    let month = {"January":1, "Februrary":2, "March":3, "April":4,"May":5, "June":6, "July":7,"August":8, "September":9, "October":10, "November":11, "December":12}
    let curr = currentDate.split(" "), exp = expirationDate.split(" ")
    
    //Year
    if(+curr[2] > +exp[2]) return false
    else if(+curr[2] < +exp[2]) return true
    
    //Month
    if(month[curr[0]] > month[exp[0]]) return false
    else if(month[curr[0]] < month[exp[0]]) return true
    
    //Day
    if(+curr[1].slice(0,-1) > +exp[1].slice(0,-1)) return false
    else if(+curr[1].slice(0,-1) <= +exp[1].slice(0,-1)) return true
}
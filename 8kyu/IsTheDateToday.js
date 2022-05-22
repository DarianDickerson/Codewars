/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

function isToday(date) {
    let today = new Date()
    return today.getDate() === date.getDate() && today.getYear() === date.getYear()
}
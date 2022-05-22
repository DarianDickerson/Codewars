/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero(fun) {
    return fun == null ? 0 : Math.floor(eval(`0 ${fun}`))
}
function one(fun) {
   return fun == null ? 1 : Math.floor(eval(`1 ${fun}`))
}
function two(fun) {
    return fun == null ? 2 : Math.floor(eval(`2 ${fun}`))
}
function three(fun) {
  return fun == null ? 3 : Math.floor(eval(`3 ${fun}`))
}
function four(fun) {
  return fun == null ? 4 : Math.floor(eval(`4 ${fun}`))
}
function five(fun) {
  return fun == null ? 5 : Math.floor(eval(`5 ${fun}`))
}
function six(fun) {
  return fun == null ? 6 : Math.floor(eval(`6 ${fun}`))
}
function seven(fun) {
  return fun == null ? 7 : Math.floor(eval(`7 ${fun}`))
}
function eight(fun) {
  return fun == null ? 8 : Math.floor(eval(`8 ${fun}`))
}
function nine(fun) {
  return fun == null ? 9 : Math.floor(eval(`9 ${fun}`))
}
  
function plus(fun) {
  return `+ ${fun}`
}
function minus(fun) {
  return `- ${fun}`
}
function times(fun) {
    return `* ${fun}`
}
function dividedBy(fun) {
    return `/ ${fun}`
}
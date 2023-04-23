/*
Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

The function should be able to take up to 4 arguments:

The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
The 3rd and 4th arguments are integers, 3 and 5 by default.
Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

[ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
Examples
fizzBuzzCustom()[15]                         // returns 16
fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
fizzBuzzCustom('Hey', 'There')[25]         // returns 26
fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)

*/

var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
    let res = []
    let str1 = stringOne == null ? "Fizz" : stringOne
    let str2 = stringTwo == null ? "Buzz" : stringTwo
    let n1 = numOne == null ? 3 : numOne
    let n2 = numTwo == null ? 5 : numTwo
    
    for(let i=1; i<=100; i++){
      if(i % n1 === 0 && i % n2 === 0) res.push(str1 + str2)
      else if(i % n1 === 0) res.push(str1)
      else if(i % n2 === 0) res.push(str2)
      else res.push(i)
    }
    
    return res
};
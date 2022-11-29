/*
Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084
*/

function fibonacci(max) {
    let n1 = 0 , n2 = 1, sum = 0, temp = 0 
    
    while(temp<max){
      temp = n1 + n2
      n2 = n1
      n1 = temp
      if(temp % 2 === 0 && temp < max) sum += temp
    }
    return sum
}
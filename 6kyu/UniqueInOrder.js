/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
    let count = -1
    let arr = iterable
    
    if (typeof iterable === 'string' || iterable instanceof String){
      arr = iterable.split("")
    }
    
    return arr.filter(function(ch){
      if(arr[count] !== ch){
        count++
        return ch
      }
      count++
      return 
    })
}
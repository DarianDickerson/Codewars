/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/

function combine() {
    let res = {}
    Object.assign(res,arguments[0])
    
    for(let i=1; i<arguments.length; i++){
      for(let key in arguments[i]){
        if(res[key] == null){
          res[key] = arguments[i][key]
        }
        else{
          res[key] += arguments[i][key]
        }
      }  
    }
    
    return res
}
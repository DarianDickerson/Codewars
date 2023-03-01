/*
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/

function last(list){
    if(arguments.length > 1) return arguments[arguments.length -1]
    else if(typeof list == "string") return list.split("")[list.length-1]
    else if(Array.isArray(list)) return list[list.length -1]
    return list
}
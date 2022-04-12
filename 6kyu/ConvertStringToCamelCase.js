/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
    let arr = str.replace(/[-_]/gi," ").split(" ")
    
    for(let i=1; i<arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    
    return arr.join("")
}
/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

function addLetters(...letters) {
    if(letters.length === 0) return "z"
    else if(letters.length === 1) return letters[0]
    
    let abc = " abcdefghijklmnopqrstuvwxyz"
    let pos = letters.reduce((a,c) => abc.indexOf(c) + a,0)
    
    while(pos > 26){
      pos -= 26
    }
    
    return abc[pos]
}
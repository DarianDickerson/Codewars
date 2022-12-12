/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)


*/

function longestRepetition(s) {
    if (s === "") return ["",0]
    else if(s.legngth === 1) return [s,1]
    
    let longest = 1, current = 1, char = s[0]
    
    for(let i=1; i<s.length; i++){
      //Same
      if(s[i] === s[i-1]){
        current++
      }
      //Different
      else{
        if(current > longest){
          longest = current
          char = s[i-1]
        }
        current = 1
      }
    }
    
    if(current > longest){
      longest = current
      char = s[s.length-1]
    }
    
    return [char, longest]
}
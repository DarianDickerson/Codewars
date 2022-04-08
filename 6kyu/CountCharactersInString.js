/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
    if(string.length == 0){
      return {}
    }
    
    const count = {}
    
    string.split("").forEach(ch=> count.hasOwnProperty(ch) ? count[ch]++ : count[ch] = 1 ) 
    
    return count
}
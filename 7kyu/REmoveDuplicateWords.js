/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
    let res = []
    s = s.split(" ")
    for(let i=0; i<s.length; i++){
      if(!res.includes(s[i])) res.push(s[i])
    }
    return res.join(" ")
}
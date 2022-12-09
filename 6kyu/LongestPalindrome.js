/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

longestPalindrome=function(s){
    if(s.length < 2) return s.length
    for(let i=s.length; i>0; i--){
      for(let j=0; j<=s.length - i; j++){
        let wd = s.substr(j,i)
        if(wd === wd.split("").reverse().join("")) return i
      }
    }
}
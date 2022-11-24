/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
    let res = ""
    
    s.split("").forEach((ch,i) => {
      if(ch === "#" && res.length > 0) res = res.slice(0,-1) 
      else if (ch != "#") res += ch
    })
    
    return res
}
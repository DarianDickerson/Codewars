/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters*/

function kebabize(str) {
    let res = str.split("").map((ch,i) =>{
      if(Number.isInteger(+ch)) return ""
      else if(ch === ch.toUpperCase()) return "-" + ch.toLowerCase()
      else return ch
    }).join("")
    
    return res[0] === "-" ? res.substring(1) : res
}
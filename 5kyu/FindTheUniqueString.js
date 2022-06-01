/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
*/

function findUniq(arr) {
    let fixed = arr.map(str =>{
      return [...new Set(str.toLowerCase().split(" ").join("").split("").sort())].join("")
    })
    
    const vals = [...new Set(fixed)]
    let val0Count = 0
    let val1Count = 0
    
    for(let i=0; i<fixed.length; i++){
      if(vals[0] === fixed[i]){
        val0Count++
      }
      else if(vals[1] === fixed[i]){
        val1Count++
      }
      
      if(val0Count > 1){
        return arr[fixed.indexOf(vals[1])]
      }
      else if(val1Count > 1){
        return arr[fixed.indexOf(vals[0])]
      }
    }
}
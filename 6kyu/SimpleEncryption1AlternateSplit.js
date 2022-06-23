/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
    if(text == null){
      return null
    }
    else if(n <= 0){
      return text
    }
    
    let odd = text.split("").filter((ch,i)=> i % 2 === 1 )
    let even = text.split("").filter((ch,i)=> i % 2 === 0 )
    
    return encrypt( odd.concat(even).join(""),n-1)
}
  
function decrypt(text, n) {
    if(text == null){
      return null
    }
    else if(n <= 0){
      return text
    }
    
    let even = text.split("").slice(Math.floor(text.length/2),text.length)
    let odd = text.split("").slice(0,text.length/2)
    let undo = []
    for(let i=0; i<text.length; i++){
      if(i % 2 === 0){
        undo.push(even[0])
        even.shift()
      }else{
        undo.push(odd[0])
        odd.shift()
      }
    }
    
    return decrypt( undo.join(""),n-1)
}
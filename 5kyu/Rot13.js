/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(msg){
    const abcs = "abcdefghijklmnopqrstuvwxyz"
    let code = ""
    let temp
    for(let i=0; i<msg.length; i++){
      if(abcs.includes(msg[i].toLowerCase())){
        temp = abcs[(abcs.indexOf(msg[i].toLowerCase()) +13) % 26]
        if(msg.charCodeAt(i) < 97){
          temp = temp.toUpperCase()
        }
        code += temp
      }else{
        code += msg[i]
      }
    }
    return code
}
/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
    if(text.length === 1){
      return text.replace(text[0],String(text.charCodeAt(0)))
    }
    else{
      let encrypt = text.split(" ").map(function(word){
        if(word.length > 2){
          if(word.length === 3){
            word = word.substring(0,1) + word[2] + word[1]
          }
          else{
            word = word.substring(0,1) + word[word.length-1] + word.substring(2,word.length-1) + word[1]
          } 
        }
        word = word.replace(word[0],String(word.charCodeAt(0)))
        return word
      })
    
      return encrypt.join(" ")
    }
}
/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove (string) {  
    let sent = string.split("")
    while(sent[sent.length -1] === "!"){
      sent.pop()
    }
    return sent.join("")
}
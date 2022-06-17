/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
    const legal = "abcdefghijklmnopqrstuvwxyz0123456789_"
    if(username.length < 4 || username.length > 16){
      return false
    }
    for(let i=0; i<username.length; i++){
      if(!legal.includes(username[i])){
        return false
      }
    }
    return true
}
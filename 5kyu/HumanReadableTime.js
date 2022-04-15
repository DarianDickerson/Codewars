/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
    let time =[]
    let ratio = 3600
    
    for(let i=0; i<3; i++){
      time.push(String(Math.floor(seconds / ratio)))
      if(time[i].length === 1){
        time[i] = "0" + time[i]
      }
      seconds = seconds % ratio
      ratio /= 60
    }
    return time.join(":")
}
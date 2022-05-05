/*
Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

timeMath('01:24:31', '-', '02:31:41') === '22:52:50'
*/

function timeMath(time1, op, time2) {
    let t1 = time1.split(":").map(n=>+n)
    let t2 = time2.split(":").map(n=>+n)
    
    if(op === "+"){
      t2[2] = t1[2] + t2[2] 
      if(t2[2] >= 60){
        t2[2] = t2[2] % 60
        t2[1] += 1
      }
      
      
      t2[1] = t1[1] + t2[1] 
      if(t2[1] >= 60){
        t2[1] = t2[1] % 60
        t2[0] += 1
      }
      
      t2[0] = t1[0] + t2[0] 
      if(t2[0] >= 24){
        t2[0] = t2[0] % 24
      }
      
    }else{
      if(t2[2] > t1[2]){
        if(t1[1] === 0){
          t1[0] -=1
        }
        t1[1] -= 1
        t1[2] += 60
      }
      t2[2] = t1[2] - t2[2]
      
      if(t1[1] < 0){
        t1[1] = 59
      }
      if(t2[1] > t1[1]){
        t1[0] -= 1
        t1[1] += 60
      }
      t2[1] = t1[1] - t2[1]
      
      if(t1[0] < 0){
        t1[0] = 23
      }
      if(t2[0] > t1[0]){
        t1[0] += 24
      }
      t2[0] = t1[0] - t2[0]
    }
    
    return t2.map(function(n){
      n = String(n)
      if(n.length < 2){
        n = "0" + n
      }
      return n
    }).join(":")
}
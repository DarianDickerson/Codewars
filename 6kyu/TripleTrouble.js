/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
    num1 = num1.toString()
    num2 = num2.toString()
    let trip = []
    for(let i=2; i<num1.length; i++){
      if(num1[i] === num1[i-1] && num1[i] === num1[i-2]){
        trip.push(num1[i])
      }
    }
    
    let dub = []
    for(let i=1; i<num2.length; i++){
      if(num2[i] === num2[i-1]){
        dub.push(num2[i])
      }
    }
    
    for(let i=0; i<dub.length; i++){
      if(trip.includes(dub[i])){
        return 1
      }
    }
    
    return 0
}
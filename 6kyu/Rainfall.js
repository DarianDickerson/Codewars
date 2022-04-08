/*
dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".

Task:
function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
Examples:
mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)
Notes:
if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

Shell tests only variance
*/

function mean(town, strng) {
    let sum = 0
  
    const chunk = strng.split("\n")
    
    const city = chunk.filter(home => town === home.substring(0,town.length))
    
    console.log(city)
    if(city.length === 0){
      return -1
    }
    
    city[0] = city[0].slice(town.length+1)
    
    const data = city[0].split(",")
    
    data.forEach( num => sum += Number(num.substring(4,num.length)))
    return isNaN(sum) ? -1 : sum / data.length 
}


function variance(town, strng) {
    let sum = 0
  
    const chunk = strng.split("\n")
    
    const city = chunk.filter(home => town === home.substring(0,town.length))
    
    console.log(city)
    if(city.length === 0){
      return -1
    }
    
    city[0] = city[0].slice(town.length+1)
    
    const data = city[0].split(",")
    
    data.forEach( num => sum += Number(num.substring(4,num.length)))
    
    let mean = sum / data.length  
    
    sum = 0
    
    data.forEach( num => sum +=  Math.pow(Number(num.substring(4,num.length)) - mean,2))
  
    return isNaN(sum) ? -1 : sum / data.length             
}
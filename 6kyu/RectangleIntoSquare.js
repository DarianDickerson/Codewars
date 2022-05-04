/*
The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

alternative text

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

Examples in general form:
(depending on the language)

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  
  You can see examples for your language in **"SAMPLE TESTS".**
  */

function sqInRect(lng, wdth){
    if(lng === wdth){
      return null
    }
    let area  = lng * wdth
    let res = []
    
    while(area > 0){
      if(lng < wdth){
        area -= lng**2
        res.push(lng)
        wdth -= lng
      }
      else{
        area -= wdth**2
        res.push(wdth)
        lng -= wdth
      }
    }
    return res
}
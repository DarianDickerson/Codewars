//Lost Discription

function distinctDigitYear(year) {
    let unique = new Set()
    
    for(let i=year+1; i<9001; i++){
      i.toString().split("").forEach(n=>unique.add(n))
      if(unique.size === 4){
        return i
      }
      unique.clear()
    }
}
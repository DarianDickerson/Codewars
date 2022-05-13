/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

function nameShuffler(str){
    //PREP
    //Parameters 
    //str: string containing two words separated by a space
    
    //Split the string by " "
    //Swap the elements' indexes with help of a temp variable
    //Join the array with a " "
    str = str.split(" ")
    let temp = str[1]
    str[1]=str[0]
    str[0]=temp
    return str.join(" ")
}
  //Return
  //string with the same two words positions swapped, separated by a space
  
  //Examlpe
  console.log("Domino Tabasco")//"Tabasco Domino"
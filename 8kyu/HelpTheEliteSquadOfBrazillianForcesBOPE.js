/*
The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.
*/

function magNumber(info){
    //PREP
    //Parameters
    //info: array of length 2, 
    //info[0]: string determining size of magazine
    //info[1]: int > 0, number of streets
    
    //Create dictionary for Magazine / gun type ratio
    //Multiply number of streets by 3
    //Reference dictionary for gun type
    //Divide w/ ceiling function bullets needed / magazine capacity
    
    let cap = {"PT92":17,"M4A1":30,"M16A2":30,"PSG1":5}
    let bullNeed = info[1] * 3
    return Math.ceil(bullNeed / cap[info[0]])
}
  //Return
  //Int, number of magazines needed to complete the trip
  
  //Example
  console.log(magNumber(["PSG1", 6]))//4
/*
Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]],
["name2", 140, ["B", "A", "A", "A"]],
["name3", 200, ["B", "A", "A", "C"]]
];
The scores for each grade is:

A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
["name3", 200, ["B", "A", "A", "C"]] // name3 point is 200 but real point is 90 => hacked
];

return ["name1", "name3"];
*/

function findHack(arr) {
    let points = {"A":30, "B":20, "C":10, "D":5}
    
    return arr.filter(s =>{
      if(s[1] > 200) return true
      
      let score = s[2].reduce((a,c)=> a + (points[c] == null ? 0 : points[c]),0)
      if(s[2].findIndex(l=> l != "A" && l != "B") === -1) score += 20
      
      if(s[1] === score) return false
      return true
    })
    .map(name => name[0])
}
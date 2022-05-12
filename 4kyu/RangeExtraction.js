/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
    let range = [list[0]]
    let nums = ""
    
    for(let i=1; i<=list.length; i++){
      if(list[i-1] === list[i]-1){
        range.push(list[i])
      }
      else if(range.length < 3){
        range.forEach(n=> nums += n + ",")
        range = []
        range.push(list[i])
      }
      else{
        nums += `${range[0]}-${range[range.length-1]},`
        range = []
        range.push(list[i])
      }
    }
    return nums.substring(0,nums.length-1)
}
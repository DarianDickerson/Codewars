/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
    return num.toString().split("").map((n,i,a)=> i>0 && (+n % 2 != 0 && +a[i-1] % 2 != 0) ? "-" + n : n).join("")
}
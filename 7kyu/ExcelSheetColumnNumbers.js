/*
Write a function

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(depending on the language)

that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

Examples:

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27
*/

function titleToNumber(title) {
    var arr = title.split("");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt(0) - 64
    }
    arr.reverse();
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += (arr[i] * Math.pow(26, i));
    }
    return sum;
}
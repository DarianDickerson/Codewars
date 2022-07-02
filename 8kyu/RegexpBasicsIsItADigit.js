/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function() {
    const nums = "0123456789"
    return this == "" ? false : nums.includes(this);
}
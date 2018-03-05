module.exports = function(string, num = string.length) {
    return string + "!".repeat(num);
}
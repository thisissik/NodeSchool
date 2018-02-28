module.exports = function(operation, num) {
    while (num > 0) {
        operation();
        num--;
    }
};
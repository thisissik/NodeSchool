module.exports = function arrayMap(arr, fn) {
    var result = [];
    arr.reduce(function(prev, curr, i, arr) {
        result.push(fn(curr));    
    },null);
    return result;
}
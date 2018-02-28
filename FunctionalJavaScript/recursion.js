
function reduce(arr, fn, initial) {
    if (arr.length == 0) {
        return initial;
    }        
    inital = fn(initial, arr[0]);
    return reduce (arr.slice(1), fn, initial);
}

module.exports = reduce;
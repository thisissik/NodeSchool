function duckCount(args) {
    var argsArray = [].slice.call(arguments);
    return argsArray.filter(function(arg) { return Object.hasOwnProperty.call(arg,"quack");}).length;
}
module.exports = duckCount;
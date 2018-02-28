function logger(namespace) {
    return function(arr) {
        var args = [namespace].concat([].slice.call(arguments));
        console.log.apply(null,args);
    };
}
module.exports = logger;
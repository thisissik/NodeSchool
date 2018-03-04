module.exports = function(target, method) {
    var count = {count: 0};
    var origFunc = target[method];
    target[method] = function() {
        count.count++;
        return origFunc.apply(this, arguments);
    };
    return count;
}
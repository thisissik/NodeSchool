module.exports = function average(...args) {
    let total = args.reduce((total, cur) => total + cur, 0);
    return total / args.length;
};
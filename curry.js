function curryN(fn, n) {
    n = n || fn.length;
    function curryCur(prev) {
        return function() {
          var args = prev.concat(Array.prototype.slice.call(arguments, 0));
          return (args.length < n) ? curryCur(args) : fn.apply(this,args);
        };
      }
    return curryCur([]);
  }

  
  module.exports = curryN;
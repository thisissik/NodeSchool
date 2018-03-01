function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    operation();
    if (num >= 1) {
        trampoline(repeat(operation, --num));
    }
    else {
        return;
    }
  }

  function trampoline(fn) {
    // You probably want to implement a trampoline!
    while(fn && typeof(fn) == "function") {
        fn = fn();
    }
    
  }

  module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(operation);
  }
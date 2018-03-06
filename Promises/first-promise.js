'use strict';
require("es6-promise");
var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(function() {
        fulfill("FULFILLED!");
    }, 300);
});

promise.then(console.log);
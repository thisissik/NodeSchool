/*
    * This code is bad, but nonetheless common and has the nasty result of
    * calling the supplied callback more than once (possibly destroying the
    * earth?). It is conventional to return the first invocation of callback
    * but it’s easy to overlook!
    */

let promise = new Promise(function(fulfill, reject){
    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRE"));
});

function onRejected(error) {
    console.log(error.message);
}

promise.then(console.log, onRejected);


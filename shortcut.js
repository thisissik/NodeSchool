let promise = Promise.reject(new Error("Rejected"));

promise.catch(function(err) {
    console.log(err.message);
});
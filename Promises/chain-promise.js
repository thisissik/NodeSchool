 first().then(function(val) {
    return second(val);
}).then(function(val){
    console.log(val);
});

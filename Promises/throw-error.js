function parsePromised(jsonVal){
    return new Promise(function(fulfill, reject) {
        try {
            JSON.parse(jsonVal);
            fulfill();
        } catch (error) {
            reject(error.message);
        }
    });
}

parsePromised(process.argv[2]).then(console.log).catch(console.log);
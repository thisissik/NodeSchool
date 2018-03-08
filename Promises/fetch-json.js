var http = require("q-io/http");

http.read("http://localhost:1337").then(
    function(req){
        let json = JSON.parse(req);
        console.log(json);
    }
)

var http = require("q-io/http");
var userId;

var reqObj = {
    url: "http://localhost:7000",
    method: "GET"
};

http.read(reqObj).then(function (id) {
    http.read("http://localhost:7001/" + id).then(JSON.parse).then(console.log);

});



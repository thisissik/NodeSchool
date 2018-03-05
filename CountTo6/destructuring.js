let userArray = process.argv.slice(2);
let userDetail = {};
[  ,userDetail.username, userDetail.email] = userArray;
console.log(userDetail);
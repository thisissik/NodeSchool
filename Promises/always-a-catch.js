function alwaysThrows() {
    throw new Error("OH NOES");
}

function iterate(arg) {
    console.log(++arg);
    return arg;
}
let val = 0;
let promise = Promise.resolve(val).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).catch(function(error){console.log(error.message);});
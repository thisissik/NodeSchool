function attachTitle(arg) {
    return "DR. " + arg;
}

let promise = Promise.resolve("MANHATTAN").then(attachTitle).then(console.log);

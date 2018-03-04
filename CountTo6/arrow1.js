var args = process.argv.slice(2);
var result = args.map((arg) => arg.slice(0,1)).reduce((total,curr) => total + curr);
console.log(`[${args}] becomes "${result}"`);
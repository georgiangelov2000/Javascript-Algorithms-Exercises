function solve(object) {
let toParse=JSON.parse(object);
let keys=Object.keys(toParse);
console.log(keys.length)
}
solve( '{"name":"George","secondName":"Nikolov","lastName":"Angelov"}')
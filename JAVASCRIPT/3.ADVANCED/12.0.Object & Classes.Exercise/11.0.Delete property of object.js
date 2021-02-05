function solve(object) {

    let toParse = JSON.parse(object);
    console.log(toParse)
    delete toParse.lastName;
    console.log(toParse)
}
solve(
    '{"name":"George","secondName":"Nikolov","lastName":"Angelov"}'
)
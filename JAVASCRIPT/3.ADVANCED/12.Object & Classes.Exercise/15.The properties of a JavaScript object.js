function solve(student) {
    let toParseObject = JSON.parse(student);
    for (let key in toParseObject) {
        console.log(`${key}`)
    }
}
solve(
    '{"name":"George","class":"VI","number":12}',
)

function secondSolve(stu) {
    let parsed = JSON.parse(stu);
    console.log(Object.keys(parsed))
}
secondSolve(
    '{"name":"Petar","number":"10","year":20}'
)
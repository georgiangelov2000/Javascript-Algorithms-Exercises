function solve(object) {

    object = JSON.parse(object)
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key}:${value}`)
    }

    let out = Object.keys(object).map(function (data) {
        return [  data , object[data] ]
    })
    console.log(JSON.stringify(out))

}
solve(
    ' {"red": "#FF0000","green": "#00FF00", "white": "#FFFFFF"} '
)
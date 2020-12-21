function solve(array) {
    let obj = {};
    while (array.length != 0) {
        let town = array.shift();
        let income = Number(array.shift())
        if (!obj.hasOwnProperty(town)) {
            obj[town] = 0
        }
        obj[town] += income
    }
    console.log(JSON.stringify(obj))
}
solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])

function solve(strings) {
    let inputArr = [];
    for (line of strings) {
        inputArr.push(line);
    }
    let resAndQua = {}
    for (let i = 0; i < inputArr.length; i += 2) {
        let resourse = inputArr[i];
        let quantity = parseInt(inputArr[i + 1]);
        if (!resAndQua.hasOwnProperty(resourse)) {
            resAndQua[resourse] = [];
        }
        if (!resAndQua[resourse].hasOwnProperty(quantity)) {
            resAndQua[resourse].push(quantity);
        }if(resAndQua[resourse].hasOwnProperty(quantity)){
            resAndQua[resourse]+=quantity;
        }
    }
    for (let keys in resAndQua) {
        if (resAndQua.hasOwnProperty(keys)) {
            console.log(keys + '->' + resAndQua[keys])
        }
    }
}
solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'

    ]

)


/*
function solve(array) {
    let resources = {};
    for (let i = 0; i < array.length; i += 2) {
        let names = array[i];
        let quantity = parseInt(array[i + 1]);

        if (names in resources) {
            resources[names] += quantity
        } else {
            resources[names] = quantity;
        }
    }
    for (key in resources) {
        if (resources.hasOwnProperty(key)) {
            console.log(key + '->' + resources[key]);
        }
    }
}
solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
)

*/



/*
function Main(input) {
    let inputArr = [];
    for (let currentLine of input) {
        inputArr.push(currentLine)
    }
 
    let resourceAndQuantity = new Map();
 
    for (let i = 0; i < inputArr.length; i += 2) {
        let resource = inputArr[i];
        if (resource.toLowerCase() == "stop") {
            break;
        }
        let quantity = parseInt(inputArr[i + 1]);
 
        if (resource in resourceAndQuantity) {
            resourceAndQuantity[resource] += quantity;
        }
        else {
            resourceAndQuantity[resource] = quantity;
        }
    }
 
    for (let key in resourceAndQuantity) {
        if (resourceAndQuantity.hasOwnProperty(key)) {
            console.log(key + ' -> ' + resourceAndQuantity[key]);
        }
    }
}
Main(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
)
*/
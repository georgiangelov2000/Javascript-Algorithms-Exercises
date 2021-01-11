//ascending by value

let map = new Map();
map.set('One', 1);
map.set('Two', 2);
map.set('Three', 3);
let sorted = Array.from(map.entries()).sort((a, b) => {
    return  a[1] - b[1];
})

for (let element of sorted) {
    console.log(`${element[0]} -> ${element[1]} `)
}
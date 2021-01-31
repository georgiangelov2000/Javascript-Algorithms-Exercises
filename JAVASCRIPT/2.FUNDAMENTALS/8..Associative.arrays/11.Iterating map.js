let map = new Map();
map.set(1, 'One');
map.set(2, 'Two');
map.set(3, 'Three');
let iterable = map.keys();
console.log(iterable)
for (let key of iterable) {
    console.log(`${key} => ${map.get(key)} `)
}
for (let [key, value] of map) {
    console.log(`${key}=> ${value}`);
}
//in function


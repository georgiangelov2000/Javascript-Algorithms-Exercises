let map = new Map();
map.set(1, 'One');
map.set(2, 'Two');
console.log(map.get(2));
console.log(map.get(1));
console.log(map.has(1));
console.log(map.has(2));
//delete methods delete element from map

let entries = Array.from(map.entries);
let keys = Array.from(map.keys());
let values = Array.from(map.values())
console.log(values);
console.log(keys)

// in function

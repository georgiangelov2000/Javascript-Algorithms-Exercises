function solve(strings) {
    let newString = strings.split(' ');
    let obj = new Map();
    for (let line of newString) {
        line = line.toLowerCase();
        if (!obj.has(line)) {
            obj.set(line, 0)
        }
        let newVal=obj.get(line)+1;
        obj.set(line,newVal)
    }
    return Array.from(obj.keys())
    .filter(x=> obj.get(x)%2!==0)
    .join(' ');
   
}
console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'))
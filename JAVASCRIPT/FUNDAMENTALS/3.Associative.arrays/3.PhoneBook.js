function solve(input) {
    let phonebook = {};
    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phonebook[name] = number;
    }
    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}
solve([
    'George 0896831628',
    'Nikola 0896831626',
    'Ivan 0896831621',
    'Stelian 0896831620',
    'George 0896831622',
])
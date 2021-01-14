let personInfo = function (...activities) {
    let info = `Hello my name is ${this.name} and ` + `Im a ${this.profession}. \n`;

    info += activities.reduce((acc, curr) => {
        let el = `---${curr}\n`
        return acc +  el;
    }, 'My hobbies are: \n').trim();
    return info
}

let firstPerson = {
    name: 'Peter',
    profession: 'FirsherMan'
}
console.log(personInfo.call(firstPerson, 'biking', 'swimming', 'football'))
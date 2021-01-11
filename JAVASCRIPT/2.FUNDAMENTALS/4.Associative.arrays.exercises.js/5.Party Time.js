function solve(data) {
    let list = {
        'VIP': [],
        'REGULAR': []
    }
    let name = data.shift();
    while (name !== 'PARTY') {
        let char = name[0];
        if (isNaN(char)) {
            list['REGULAR'].push(name)
        } else {
            list['VIP'].push(name);
        }
        name = data.shift();
    }
    data.forEach(name => {
        if (list['VIP'].includes(name)) {
            let i = list['VIP'].indexOf(name);
            list['VIP'].splice(i, 1);
        } else if (list['REGULAR'].includes(name)) {
            let i = list['REGULAR'].indexOf(name);
            list['REGULAR'].splice(i, 1);
        }
    });
    console.log(list['VIP'].length + list['REGULAR'].length);
    console.log(list['VIP'].join('\n') + '\n' + list['REGULAR'].join('\n'));


}
solve(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)
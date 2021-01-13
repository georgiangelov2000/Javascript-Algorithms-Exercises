let dataArray = [{
        id: 'a',
        score: '1'
    },
    {
        id: 'a',
        score: '3'
    },
    {
        id: 'b',
        score: '2'
    },
    {
        id: 'b',
        score: '2'
    },
    {
        id: 'c',
        score: '3'
    },
]
let result = dataArray.reduce((acc, curr, index, value) => {
    let same = acc.find(element => element.id === curr.id);
    if (!same) {
        acc.push(curr)
    } else {
        same.score += curr.score
    }
    return acc;
}, [])
console.log(JSON.stringify(result))
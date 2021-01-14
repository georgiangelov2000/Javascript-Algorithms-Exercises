let object=[
    {
        name:'Peter',
        age:'22'
    },
    {name:"Steven"},
    {height:180}
]
let concatenate=(a,b)=>({...a,...b});
let c=object.reduce(concatenate,{});
console.log(c)
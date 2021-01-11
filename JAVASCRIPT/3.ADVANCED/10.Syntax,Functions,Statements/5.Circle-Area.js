function solve(n) {
    let result = 0;
    if(typeof n ==='number'){
        result=Math.round(Math.PI*Math.pow(n,2))
    }else{
        result='The variable must be a number'
    }
    return result
}
let res = solve();
console.log(res)
function solve(array){
    let result=array.sort((a,b)=>b-a);
    let res=result.slice(0,2);
    console.log(res)
}
solve([
    5,2,6,3,1
])
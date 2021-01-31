function solve(array){
    for(let i=0;i<array.length;i++){
        let obj=array[i];
        for(let [key,value] of Object.entries(obj)){
            console.log(`Key:${key} -> Value:${value}`)
        }
    }
}
solve([
    { "title":"John", "age":30, "car":"bmw" },
    { "title":"Peter", "age":35, "car":"mercedes" },
    { "title":"Alisson", "age":35, "car":"mercedes" },
    { "title":"Bob", "age":35, "car":"mercedes" },

])
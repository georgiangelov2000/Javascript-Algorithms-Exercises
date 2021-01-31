function solve(array) {
  for(let i=0;i<array.length;i++){
    let result= array.sort((a,b)=>a.title.localeCompare(b.title));
    console.log(JSON.stringify(result))
   }
}
solve([
    { "title":"John", "age":30, "car":"bmw" },
    { "title":"Peter", "age":35, "car":"mercedes" },
    { "title":"Alisson", "age":35, "car":"mercedes" },
    { "title":"Bob", "age":35, "car":"mercedes" },

])

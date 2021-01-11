function solve(array) {
   let lastEl=array.pop();
   console.log(array.join(lastEl))
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
])
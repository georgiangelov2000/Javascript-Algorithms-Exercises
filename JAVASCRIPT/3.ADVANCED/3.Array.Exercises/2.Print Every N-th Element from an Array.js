function solve(array) {
    let lastEl = array.pop();
    for (let i = 0; i < array.length; i += lastEl) {
        return array[i]
    }
}
solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)
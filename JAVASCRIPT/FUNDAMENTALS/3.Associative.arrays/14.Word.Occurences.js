function wordOccurrences(arr){
    let map = new Map ();
 
    for(let word of arr){
        let wordOccurrences = 1;
 
        if(map.has(word)){
            wordOccurrences += map.get(word);
        }
      
        map.set(word, wordOccurrences)
    }
  
    let sorted = Array.from(map);
    sorted.sort((a,b) => a[1] - b[1])
 
    for(let [word,words] of sorted){
        console.log((`${word} -> ${words} times`));
    } 
}
wordOccurrences([
    'George', 'Ivan', 'Steven', 'Nikolai',
    'George', 'Ivan', 'Steven', 'Nikolai',
])
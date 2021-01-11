function myFunction(string, text) {
   string=string.toLowerCase();
   text=text.toLowerCase();
    if (text.includes(string)) {
        console.log(`${string}`)
    } else {
        console.log(`${string} not found `)
    }
}
myFunction(
    'jaVaScrIpt', 'Javascript is the best programming language'
)
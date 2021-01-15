let strings = 'Hello,George,Angelov';
let tokens = strings.split(',').filter((el) => {
    console.log(el.length > 0)
})
console.log(tokens);

//
let words = "Hello Moi Chovek";
let splitString = words.split('Moi').join(' George');
console.log(splitString)

// function

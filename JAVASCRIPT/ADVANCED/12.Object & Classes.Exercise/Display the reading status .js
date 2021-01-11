function solve(array) {
    for (let i = 0; i < array.length; i++) {
        let parsed = JSON.parse(array[i]);
        if (parsed.readingStatus === 'true') {
            console.log(`Already read ${parsed.title} -> ${parsed.author}`)
        } else {
            console.log(`You still need to read ${parsed.title} -> ${parsed.author}`)
        }
    }
}
solve(
    [
        '{"title":"Bil Gates" , "author":"The Road Ahead" , "readingStatus":"true"}',
        '{"title":"Steve Jobs" , "author":"Walter Isaacson" , "readingStatus":"true"}',
        '{"title":"Mockingjay The Final Book of The Hunger Games" , "author":"Suzanne Collins" , "readingStatus":"false"}',
    ]
)
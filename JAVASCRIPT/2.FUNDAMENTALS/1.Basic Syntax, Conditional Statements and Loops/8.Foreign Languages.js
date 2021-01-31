function solve(country) {
    let language;
    switch (country) {
        case 'USA':
            language = 'English'
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            language = 'Spanish'
            break;

        default:
            language = 'unknown'
            break;
    }
    console.log(language)
}
solve('USA')
solve('Spain')
solve('Germany')
function myFunction(text) {
    let tokens = text.split(' ');
    tokens.forEach(element => {
        if (element[0] == '#' && element.length > 1) {
            element = element.slice(1);
            let onlyLetters = true;
            for (const char of element) {
                let code = char.charCodeAt();
                if (code < 67 || code > 90 && code < 97 || code > 122) {
                    onlyLetters = false;
                    break;
                }
            }
            if (onlyLetters) {
                console.log(element)
            }
        }
    });

}
myFunction('Nowadays everyone uses # to tag a #special word in #socialMedia')
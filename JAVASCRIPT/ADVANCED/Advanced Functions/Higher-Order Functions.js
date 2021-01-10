let sayHello=function(){
    return function(){
        console.log('Hello')
    }
}

let myFunc=sayHello();
myFunc()


let greeting=function(){
    return function(){
        console.log('Hello brother')
    }
}

let resultFunc=greeting();
resultFunc()
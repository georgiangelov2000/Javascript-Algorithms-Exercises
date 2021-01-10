function solution(num) {
    let number = num;

    return function (secondNumber) {
        return secondNumber + number
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3))
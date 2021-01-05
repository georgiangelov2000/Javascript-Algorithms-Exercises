function foo() {
    console.log(this === global)
}

let user = {
    count: 10,
    foo: foo,
    bar: function () {
        console.log(this === global)
    }
}
user.foo();

let func = user.bar;

func();

user.bar();
function User(name){
    this.name=name;
}
User.prototype.sayHi=function(){
    console.log(this.name)
}

let user=new User('George');
user.sayHi();
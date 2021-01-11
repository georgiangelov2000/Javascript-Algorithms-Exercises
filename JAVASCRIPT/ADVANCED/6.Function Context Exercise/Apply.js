let firstPerson={
    name:'Peter',
    prof:'FirsherMan',
    shareInfo:function(){
        console.log(`${this.name} work as a ${this.prof} `)
    }
};
let secondPerson={
    name:'George',
    prof:'Manager'
}

firstPerson.shareInfo.apply(secondPerson)
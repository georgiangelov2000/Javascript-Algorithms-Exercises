function adresBook(array) {
    let addressBook = {};
    for (let line of array) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }
    let toArray = Object.entries(addressBook);
    toArray.sort((a, b) => {
        let sortA = a[0];
        let sortB = b[0];
        return sortA.localeCompare(sortB)
    });
   /* for(let element in addressBook){
        console.log(`${element}-> ${addressBook[element]}`)
    }
    */
   for(let[name,address] of toArray){
       console.log(`${name}-> ${address}`)
   }

}
adresBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'George:George Statement',
    'George: My place'
])
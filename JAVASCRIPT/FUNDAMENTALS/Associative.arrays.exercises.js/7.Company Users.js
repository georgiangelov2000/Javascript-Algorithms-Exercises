function solve(strings) {
    let companies = {};
    for (let line of strings) {
        let tokens = line.split(' -> ');
        let nameOfCompany = tokens[0];
        let namesOfEmployees = tokens[1];
        if (!companies.hasOwnProperty(nameOfCompany)) {
            companies[nameOfCompany] = [];
        }
        companies[nameOfCompany].push(namesOfEmployees)
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value}`)
    }
}
solve(

    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]



)
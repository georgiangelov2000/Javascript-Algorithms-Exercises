function dollarFormatterBuilder(currencyFormatter) {
    let separator = ','
    let symbol = '$'
    let symbolFirst = true;

    return currencyFormatter.bind(null, separator, symbol, symbolFirst);

}
let dollarFormatter = dollarFormatterBuilder(currencyFormatter)
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
function lastDigitAsText(val) {
    var number = parseInt(val);
    var lastDigit = Math.abs(number % 10);
    //Lookup table for the numbers.
    var numberToString = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

    return numberToString[lastDigit];
}
console.log(lastDigitAsText(6));
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));
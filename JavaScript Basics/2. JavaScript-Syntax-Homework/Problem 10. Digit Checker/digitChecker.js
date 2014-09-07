function checkDigit(value) {
    var valueAsString = value.toString();

    var digitToCheck = valueAsString.charAt(valueAsString.length - 3);
    if (digitToCheck === "3") {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));
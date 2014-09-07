function inputWindow() {
    var dexInput = parseInt(prompt("Enter a number", "15"));
    if (dexInput != null) {
        var hexNumber = dexToHex(dexInput);
        alert(hexNumber);
    }
}

function dexToHex(dexNumber) {
    var hexNumber = dexNumber.toString(16);
    return hexNumber.toUpperCase();
}
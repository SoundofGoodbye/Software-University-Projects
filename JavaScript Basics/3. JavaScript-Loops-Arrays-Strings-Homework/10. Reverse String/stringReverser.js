function reverseString(stringToReverse) {
    var resultString = "";

    for (var i = stringToReverse.length; i >= 0; i--) {
        resultString += stringToReverse.charAt(i);
    }
    console.log(resultString);
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');
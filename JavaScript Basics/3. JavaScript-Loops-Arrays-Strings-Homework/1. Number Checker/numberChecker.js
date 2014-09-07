function printNumbers(number) {
    var resultArr = [];
    var counter = 0;
    for (var i = 1; i <= number; i++) {
        if ((i % 4) !== 0 && (i % 5) !== 0) {
            resultArr[counter++] = i;
        }
        else {
            // Do nothing. We don't  want those numbers.
        }
    }
    if (resultArr.length == 0) {
        console.log("no");
    } else {
        console.log(resultArr);
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
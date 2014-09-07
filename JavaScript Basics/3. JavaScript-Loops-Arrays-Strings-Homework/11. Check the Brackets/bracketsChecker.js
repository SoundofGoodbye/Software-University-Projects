function checkBrackets(val) {
    var bracketsCounter = 0;

    for (var i = 0; i < val.length; i++) {
        if (val.charAt(i) === '(') {
            bracketsCounter++;
        } else if (val.charAt(i) === ')') {
            bracketsCounter--;
        }
    }
    if (bracketsCounter == 0) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
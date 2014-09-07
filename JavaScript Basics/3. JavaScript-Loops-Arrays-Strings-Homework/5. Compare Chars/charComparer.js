function compareChars(firstArr, secondArr) {
    var isEqual = true;

    if (firstArr.length != secondArr.length) {
        isEqual = false;
    } else {
        for (var i = 0; i < firstArr.length; i++) {
            if (!(firstArr[i] == secondArr[i])) {
                isEqual = false;
            }
        }
    }

    if (isEqual) {
        console.log("Equal");
    } else {
        console.log("Not equal");
    }
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);
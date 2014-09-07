function findMaxSequence(sequence) {
    var currentMaxResult = [];
    currentMaxResult[0] = sequence[0];
    var result = [];
    result[0] = "no";
    var counter = 0;

    for (var i = 1; i < sequence.length; i++) {
        if (currentMaxResult[counter] < sequence[i]) {
            counter++;
            currentMaxResult[counter] = sequence[i];
        }
        else {
            counter = 0;
            currentMaxResult = [];
            currentMaxResult[0] = sequence[i]
        }
        if (currentMaxResult.length > result.length) {
            result = currentMaxResult;
        }
    }
    console.log(result);
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
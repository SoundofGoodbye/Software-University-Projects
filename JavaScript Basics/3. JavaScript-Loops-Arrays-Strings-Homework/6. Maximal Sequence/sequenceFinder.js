function findMaxSequence(sequence) {
    var currentMaxResult = [];
    currentMaxResult[0] = sequence[0];
    var result = [];
    result = currentMaxResult;

    var counter = 1;

    for (var i = 1; i < sequence.length; i++) {
        if (currentMaxResult[0] === sequence[i]) {
            currentMaxResult[counter] = sequence[i];
            counter++;
        }
        else {
            currentMaxResult = [];
            currentMaxResult[0] = sequence[i];
            counter = 1;
        }

        if (currentMaxResult.length >= result.length) {
            result = currentMaxResult;
        }
    }

    console.log(result);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);
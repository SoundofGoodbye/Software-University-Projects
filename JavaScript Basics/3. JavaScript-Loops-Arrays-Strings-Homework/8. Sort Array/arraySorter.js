function sortArray(arrayToSort) {
    for (var i = 0; i < arrayToSort.length; i++) {
        for (var k = i+1; k < arrayToSort.length; k++) {
            if (arrayToSort[k] < arrayToSort[i]) {
                var temp = arrayToSort[i];
                arrayToSort[i] = arrayToSort[k];
                arrayToSort[k] = temp;
            }
        }
    }
    console.log(arrayToSort);
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
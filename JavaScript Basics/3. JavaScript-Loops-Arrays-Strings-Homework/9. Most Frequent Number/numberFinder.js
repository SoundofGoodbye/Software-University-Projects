function findMostFreqNum(arr) {
    var mostFrequentNum = arr[0];
    var counter = 1;
    var mostFrequentCounter = 1;
    var tempNum;

    for (var i = 0; i < arr.length; i++) {
        counter = 1;
        tempNum = arr[i];
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[k] === tempNum) {
                counter++;
            }
        }
        if (counter > mostFrequentCounter) {
            mostFrequentNum = tempNum;
            mostFrequentCounter = counter;
        }
    }
    console.log(mostFrequentNum + "( " + mostFrequentCounter + " times)");
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
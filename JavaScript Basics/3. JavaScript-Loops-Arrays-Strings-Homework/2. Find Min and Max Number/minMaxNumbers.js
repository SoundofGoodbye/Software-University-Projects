function findMinAndMax(numArray) {
   var max =  Math.max.apply( Math, numArray );
    var min = Math.min.apply(Math, numArray);

    console.log("Min -> " + min);
    console.log("Max -> " + max);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
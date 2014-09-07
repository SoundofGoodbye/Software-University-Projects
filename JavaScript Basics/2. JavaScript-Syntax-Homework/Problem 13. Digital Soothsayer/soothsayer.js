function soothsayer(masterArr) {
    var minNumber = 0;
    var maxNumber = 4;
    var result = [];

    for (var i = 0; i < masterArr.length; i++) {
        var temp = masterArr[i];
        var randomNumber = Math.floor(Math.random() * ((maxNumber - minNumber) + 1) + minNumber);
        result[i] = temp[randomNumber];
    }

    var counter = 0;
    console.log("You will work " + result[counter++] + " years on " + result[counter++] + ".");
    console.log("You will live in " + result[counter++] + " and drive " + result[counter++] + ".");
}


soothsayer([
    [3, 5, 2, 7, 9],
    ["Java", "Python", "C#", "JavaScript", "Ruby"],
    ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"],
    ["BMW", "Audi", "Lada", "Skoda", "Opel"]
]);


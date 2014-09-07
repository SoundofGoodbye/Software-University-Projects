function divisionBy3(value) {
    var counter = 0;
    var number = value.toString();
    for (var i = 0; i < number.length; i++) {
        counter += parseInt(number.charAt(i));
    }
    if (counter % 3 == 0) {
        console.log("the number is divided by 3 without remainder");
    }
    else {
        console.log("the number is NOT divided by 3 without remainder");
    }
}

divisionBy3(12);
divisionBy3(189);
divisionBy3(591);
divisionBy3(592);
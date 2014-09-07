function convertKWtoHP(kW) {
    var horsePower = 0;
    horsePower = kW / 0.746;
    horsePower = Math.round((horsePower + 0.00001) * 100) / 100;
    console.log(horsePower);
}
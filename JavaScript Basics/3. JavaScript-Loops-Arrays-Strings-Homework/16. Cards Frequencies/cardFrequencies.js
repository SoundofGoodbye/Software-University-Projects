function findCardFrequency(value) {
    var cards = value.split(/[♣♦♥♠ ]+/);
    cards.pop(); // remove last element as it is empty string.

    var map = {};
    var total = 0;
    for (var i = 0; i < cards.length; i++) {
        var count = 0;
        var key = cards[i]
        for (var j = 0; j < cards.length; j++) {
            if (cards[i] === cards[j]) {
                count++;
            }
        }
        map[cards[i]] = count;
    }

    for (var key in map) {
        total += map[key];
    }
    for (var key in map) {
        var frequency = ((map[key] / total) * 100).toFixed(2);
        console.log(key + " " + "->" + " " + frequency + "%");
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');
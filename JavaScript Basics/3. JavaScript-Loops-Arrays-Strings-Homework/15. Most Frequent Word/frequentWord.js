function findMostFreqWord(val) {
    //Text to lowercase and striped from punctuations.
    var text = val.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ");

    var mostFreqWordArr = []; // Array holding all the frequent words
    var mostFreqWordCounter = 0; // Holds the currently longest word
    var position = 0;
    var helperArr = [];

    var counter = 0;

    for (var i = 0; i < text.length; i++) {
        helperArr[0] = text[i];
        counter++;
        for (var k = i + 1; k < text.length; k++) {
            if (text[i] === text[k]) {
                helperArr[0] = text[i];
                counter++;
            }
        }
        if (mostFreqWordCounter < counter) {
            mostFreqWordArr = [];
            position = 0;
            mostFreqWordArr[position] = helperArr[0] + " -> " + counter + " times";
            mostFreqWordCounter = counter;
        } else if (mostFreqWordCounter == counter) {
            position++;
            mostFreqWordArr[position] = helperArr[0] + " -> " + counter + " times";
        }
        counter = 0;
    }

    console.log(mostFreqWordArr);
}
findMostFreqWord('in the middle of the night');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling. NOPE NOPE NOPE');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.')



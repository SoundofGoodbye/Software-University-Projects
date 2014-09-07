function countSubstringOccur(arr) {
    var keyword = arr[0];
    var text = arr[1].toLowerCase();
    var splittedText = text.split(" ");
    var wordCounter = 0;

    for (var i = 0; i < splittedText.length; i++) {
        var textWord = splittedText[i];
        for (var k = 0; k < textWord.length; k++) {
            if (textWord[k] === keyword[0]) {
                var matchedKeyWordInText = textWord.substring(k, k + keyword.length);
                if (matchedKeyWordInText === keyword) {
                    wordCounter++;
                }
            }
        }
    }
    console.log(wordCounter);
}
countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']);
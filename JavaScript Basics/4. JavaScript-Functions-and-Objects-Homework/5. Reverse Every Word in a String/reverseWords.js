function reverseWordsInString(str) {
    var result = "";
    var words = str.split(" ");
    var wordsCount = words.length;

    for (var k = 0; k < wordsCount; k++) {
        var currentWord = words[k];
        var currentWordLength = currentWord.length;
        for (var i = currentWordLength; i >= 0; i--) {
            result += currentWord.charAt(i);
        }
        result += " ";
    }
    return result.trim();
}
console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good isn’t it?"));
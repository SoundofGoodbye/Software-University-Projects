function replaceSpace(text) {
    var splittedText = text.split(" ");

    var resultString = "";
    for (var i = 0; i < splittedText.length; i++) {
        resultString += splittedText[i];
    }
    console.log(resultString);
}

replaceSpace('But you were living in another world tryin\' to get your message through');
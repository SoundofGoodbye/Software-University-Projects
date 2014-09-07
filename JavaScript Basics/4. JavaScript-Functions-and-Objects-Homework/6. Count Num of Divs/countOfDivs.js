function countDivs(value) {
    var result = 0;
    var currentDiv = 0;
    // Count divs without looping through every element.
    while (value.indexOf('<div', currentDiv) != -1) {
        result++;
        currentDiv = value.indexOf('<div', currentDiv) + 1;
    }
    return result;
}
console.log(countDivs('<!DOCTYPE html>' +
    '<html>' +
    '<head lang="en">' +
    '<meta charset="UTF-8">' +
    '<title>index</title>' +
    '<script src="/yourScript.js" defer></script>' +
    '</head>' +
    '<body>' +
    '<div id="outerDiv">' +
    '<div' +
    'class="first">' +
    '<div><div>hello</div></div>' +
    '</div>' +
    '<div>hi<div></div></div>' +
    '<div>I am a div</div>' +
    '</div>' +
    '</body>' +
    '</html>'));
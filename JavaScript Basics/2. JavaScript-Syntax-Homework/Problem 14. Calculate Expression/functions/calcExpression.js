function calculate() {
    var inputField = document.getElementById("input-field");
    var paragraph = document.getElementById("result");

    var validation = /^[0-9 \-+/*.()]+$/;
    if (inputField.value.match(validation)) {
        var result = eval(inputField.value);
        paragraph.textContent = result;
    } else {
        alert("Incorrect expression given.")
    }
}
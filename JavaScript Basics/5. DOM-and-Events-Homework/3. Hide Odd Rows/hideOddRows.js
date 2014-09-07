function hideOddRows() {
    var rows = document.querySelectorAll('body table tr');
    var rowsCount = rows.length

    for (var i = 0; i < rowsCount; i += 2) {
        rows[i].style.display = 'none'; // hide rows
    }
}
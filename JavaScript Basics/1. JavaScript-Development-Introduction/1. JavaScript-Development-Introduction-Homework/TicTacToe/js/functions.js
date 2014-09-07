var isCrossTurn = true;

// this.id - pure java script
//$(this).attr() - jquery

$("#new-game-dialog").on('click', '.dialog-button', function () {
    var clickedButton = document.getElementById(this.id).id;

    if (clickedButton === "new-game") {
        document.getElementById("new-game-dialog").style.visibility = "hidden";
        clearRows();
        createCells();
    } else if (clickedButton === "no-thanks") {
        document.getElementById("new-game-dialog").style.visibility = "hidden";
    }
});

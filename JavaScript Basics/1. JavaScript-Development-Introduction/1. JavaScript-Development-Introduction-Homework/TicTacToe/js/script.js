/**
 * This function creates the cells and appends them to the holder(parent) div.
 */
function createCells() {
    var holder = document.createElement("div");
    holder.className = "holder left";
    holder.id = "holder";
    document.getElementById('dim').appendChild(holder);
    for (var i = 0; i < 9; i++) {
        createCell("cell_" + (i + 1));
    }
    onClickHandler();
}

function createCell(currentCellId) {
    var cell = document.createElement("div");
    cell.style.width = '33%';
    cell.style.height = '33%';
    cell.style.border = '1px solid red';
    cell.style.float = 'left';
    cell.id = currentCellId;
    cell.className = "clickable";

    document.getElementById('holder').appendChild(cell);
}

function checkRows() {
    var parent = document.getElementById("holder");
    var cells = parent.children;
    var isWin = false;
    for (var i = 0; i < cells.length; i += 3) {
        var firstCell = cells[i].className;
        var secondCell = cells[i + 1].className;
        var thirdCell = cells[i + 2].className;
        if (firstCell !== "clickable" && (firstCell === secondCell && secondCell === thirdCell)) {
            isWin = true;
        }
    }
    return isWin;
}

function checkCols() {
    var parent = document.getElementById("holder");
    var cells = parent.children;
    var isWin = false;
    for (var i = 0; i < 3; i++) {
        var firstCell = cells[i].className;
        var secondCell = cells[i + 3].className;
        var thirdCell = cells[i + 6].className;
        if (firstCell !== "clickable" && (firstCell === secondCell && secondCell === thirdCell)) {
            isWin = true;
        }
    }
    return isWin;
}

function checkMainDiagonal() {
    var parent = document.getElementById("holder");
    var cells = parent.children;
    var isWin = false;

    var firstCell = cells[0].className;
    var secondCell = cells[4].className;
    var thirdCell = cells[8].className;
    if (firstCell !== "clickable" && (firstCell === secondCell && secondCell === thirdCell)) {
        isWin = true;
    }
    return isWin;
}

function checkSecondaryDiagonal() {
    var parent = document.getElementById("holder");
    var cells = parent.children;
    var isWin = false;

    var firstCell = cells[2].className;
    var secondCell = cells[4].className;
    var thirdCell = cells[6].className;
    if (firstCell !== "clickable" && (firstCell === secondCell && secondCell === thirdCell)) {
        isWin = true;
    }
    return isWin;
}

function checkWin() {
    var isWin = false;

    if (checkRows()) {
        isWin = true;
    }
    else if (checkCols()) {
        isWin = true;
    }
    else if (checkMainDiagonal()) {
        isWin = true;
    }
    else if (checkSecondaryDiagonal()) {
        isWin = true;
    }

    return isWin;
}

function checkDraw() {
    var parent = document.getElementById("holder");
    var cells = parent.children;
    var isDraw = true;

    for (var i = 1; i < cells.length; i++) {
        var currentCell = cells[i].className;
        if (currentCell === "clickable") {
            isDraw = false;
            return isDraw;
        }
    }
    return isDraw;
}


function clearRows() {
    var parent = document.getElementById("holder");
    parent.remove();

    /*  var cells = parent.children;
     var cellsCount = cells.length;
     for (var i = 1; i < cellsCount; i++) {
     var currentCell = document.getElementById(cells[i].id);
     currentCell.parentNode.removeChild(currentCell);
     }*/
}

function onClickHandler() {
    $("#holder").on('click', '.clickable', function () {
        var clickedCell = document.getElementById(this.id);
        if (isCrossTurn) {
            clickedCell.className = "crossed";
        }
        else if (!isCrossTurn) {
            clickedCell.className = "circle";
        }
        else {
            alert("Something went wrong with the game.");
        }
        if (checkWin()) {
            if (isCrossTurn) {
                alert("Cross won!")
                document.getElementById("new-game-dialog").style.visibility = "visible";
            }
            else {
                alert("Circle won!")
                document.getElementById("new-game-dialog").style.visibility = "visible";
            }
        }
        else if (checkDraw()) {
            alert("Draw");
        }
        isCrossTurn = !isCrossTurn;
    });
}
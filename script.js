let currentPlayer = "X";
let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function makeMove(row, col) {
    if (!gameBoard[row][col]) {
        gameBoard[row][col] = currentPlayer;
        document.getElementById("board").children[row * 3 + col].textContent = currentPlayer;
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
        } else if (isBoardFull()) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }
    }
}

function checkWinner() {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) {
            return true;
        }
        if (gameBoard[0][i] === currentPlayer && gameBoard[1][i] === currentPlayer && gameBoard[2][i] === currentPlayer) {
            return true;
        }
    }
    if (gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) {
        return true;
    }
    if (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer) {
        return true;
    }
    return false;
}

function isBoardFull() {
    for (let row of gameBoard) {
        if (row.includes("")) {
            return false;
        }
    }
    return true;
}

function resetBoard() {
    currentPlayer = "X";
    gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.textContent = "";
    }
}

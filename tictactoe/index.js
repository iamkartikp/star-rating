const squares = document.querySelectorAll(".game-square");
const gameHeading = document.getElementById("game-heading");
const restartBtn = document.getElementById("restart-button");

const p1 = "X";
const p2 = "O";

let currentPlayer = p1;
let isGameOver = false;

const matrix = [
    [squares[0], squares[1], squares[2]],
    [squares[3], squares[4], squares[5]],
    [squares[6], squares[7], squares[8]]
]

squares.forEach((square) => {
    square.addEventListener("click", handleClickBox)
})

function handleClickBox() {
    this.textContent = currentPlayer;
    currentPlayer === p1 ? currentPlayer = p2 : currentPlayer = p1;
    checkWinner();
}

function checkWinner() {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0].innerText !== "" && matrix[i][0].innerText === matrix[i][1].innerText && matrix[i][1].innerText === matrix[i][2].innerText) {
            winner = matrix[i][0].innerText;
            isGameOver = true;
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[0][i].innerText !== "" && matrix[0][i].innerText === matrix[1][i].innerText && matrix[1][i].innerText === matrix[2][i].innerText) {
            winner = matrix[0][i].innerText;
            isGameOver = true;
            break;
        }
    }

    if (matrix[0][0].innerText !== "" && matrix[0][0].innerText === matrix[1][1].innerText && matrix[1][1].innerText === matrix[2][2].innerText) {
        winner = matrix[0][0].innerText;
        isGameOver = true;
    }

    if (matrix[0][2].innerText !== "" && matrix[0][2].innerText === matrix[1][1].innerText && matrix[1][1].innerText === matrix[2][0].innerText) {
        winner = matrix[0][2].innerText;
        isGameOver = true;
    }

    if (isGameOver === false) {
        let isTie = true;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j].innerText === "") {
                    isTie = false;
                    break;
                }
            }
        }
        if (isTie === true) {
            gameHeading.innerText = "Tie Game!";
            isGameOver = true;
        }
    }

    if (isGameOver === true) {
        if (winner === p1) {
            gameHeading.innerText = "Player 1 Won!";
        } else if (winner === p2) {
            gameHeading.innerText = "Player 2 Won!";
        }
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j].innerText === "") {
                    matrix[i][j].disabled = true;
                }
            }
        }
        restartBtn.style.display = "block";
    }
}

restartBtn.addEventListener("click", handleRestartGame);

function handleRestartGame() {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            matrix[r][c].textContent = "";
            matrix[r][c].disabled = false;
        }
    }
}
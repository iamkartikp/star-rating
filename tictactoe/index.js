const squares = document.querySelectorAll(".game-square");
const restartBtn = document.getElementById("restart-button");

const p1 = "X";
const p2 = "O";

let player = 1;

let winner = null;

const matrix = [
    [squares[0], squares[1], squares[2]],
    [squares[3], squares[4], squares[5]],
    [squares[6], squares[7], squares[8]]
]

squares.forEach((square) => {
    square.addEventListener("click", makeMove);
})

function makeMove(e) {
    if (player) {
        e.currentTarget.innerText = p1;
        e.currentTarget.disabled = true;
        player = 0;
    } else {
        e.currentTarget.innerText = p2;
        e.currentTarget.disabled = true;
        player = 1;
    }
    checkWinner();
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0].innerText === matrix[i][1].innerText 
            && matrix[i][1].innerText === matrix[i][2].innerText) {
            winner = matrix[i][0];
            break;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (matrix[0][i].innerText === matrix[1][i].innerText 
            && matrix[1][i].innerText === matrix[2][i].innerText) {
            winner = matrix[0][i];
            break;
        }
    }

    if (matrix[0][0].innerText === matrix[1][1].innerText 
        && matrix[1][1].innerText === matrix[2][2].innerText) {
        winner = matrix[0][0];
    }

    if (matrix[0][2].innerText !== "" && matrix[0][2].innerText === matrix[1][1].innerText && matrix[1][1].innerText === matrix[2][0].innerText) {
        winner = matrix[0][2];
        isGameOver = true;
    }

    console.log(winner.innerText)
}

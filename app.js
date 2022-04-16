const boxes = document.querySelectorAll('.box');

const playerx = 'X';
const playero = 'O';
let turn = playerx;

currentBoard = Array(boxes.length);

boxes.forEach((box) => box.addEventListener("click", boxClicked));

function boxClicked(e) {
    const box = e.target;
    const boxNumber = box.dataset.index;
     
   
    if(turn === playerx) {
        box.innerHTML = playerx;
        currentBoard[boxNumber - 1] = playerx;
            if ((currentBoard[0] == 'X') && (currentBoard[1] == 'X') && (currentBoard[2] == 'X') || 
                (currentBoard[3] == 'X') && (currentBoard[4] == 'X') && (currentBoard[5] == 'X') || 
                (currentBoard[6] == 'X') && (currentBoard[7] == 'X') && (currentBoard[8] == 'X') || 
                (currentBoard[0] == 'X') && (currentBoard[3] == 'X') && (currentBoard[6] == 'X') || 
                (currentBoard[1] == 'X') && (currentBoard[4] == 'X') && (currentBoard[7 ] == 'X') || 
                (currentBoard[2] == 'X') && (currentBoard[5] == 'X') && (currentBoard[8] == 'X') || 
                (currentBoard[0] == 'X') && (currentBoard[4] == 'X') && (currentBoard[8] == 'X') || 
                (currentBoard[2] == 'X') && (currentBoard[4] == 'X') && (currentBoard[6] == 'X')) {
                document.getElementById('winner').innerHTML = "Player X won";
                } 
            else {
                turn = playero;
        }
   
    }else {
        box.innerHTML = playero;
        currentBoard[boxNumber - 1] = playero;
            if ((currentBoard[0] == 'O') && (currentBoard[1] == 'O') && (currentBoard[2] == 'O')|| 
            (currentBoard[3] == 'O') && (currentBoard[4] == 'O') && (currentBoard[5] == 'O') || 
            (currentBoard[6] == 'O') && (currentBoard[7] == 'O') && (currentBoard[8] == 'O') || 
            (currentBoard[0] == 'O') && (currentBoard[3] == 'O') && (currentBoard[6] == 'O') || 
            (currentBoard[1] == 'O') && (currentBoard[4] == 'O') && (currentBoard[7] == 'O') || 
            (currentBoard[2] == 'O') && (currentBoard[5] == 'O') && (currentBoard[8] == 'O') || 
            (currentBoard[0] == 'O') && (currentBoard[4] == 'O') && (currentBoard[8] == 'O') || 
            (currentBoard[2] == 'O') && (currentBoard[4] == 'O') && (currentBoard[6] == 'O')) {
            document.getElementById('winner').innerHTML = "Player O won";
            } 
            else {
                turn = playerx;
            }
    }
}

function clearBoard() {
    currentBoard.fill(null);
    boxes.forEach((box) => box.innerText = '');
    document.getElementById('winner').innerHTML = '';
    turn = playerx;
}



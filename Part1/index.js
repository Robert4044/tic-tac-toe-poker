let board = [];

function play(id) {
    const player = document.getElementById('player');
    const clicked = document.getElementById(id);
    // console.log(clicked, id);
    // document.addEventListener('click', () => {});

    if (player.innerText === 'X') {
        player.innerText = 'O';
        clicked.innerText = 'X';
        board[id] = 'X';
    } else {
        player.innerText = 'X';
        clicked.innerText = 'O';
        board[id] = 'O';
    }
    console.log(board);
    const topLeft = board[0];
    const topMiddle = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middle = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomMiddle = board[7];
    const bottomRight = board[8];

    if (
        topLeft !== undefined &&
        topLeft === topMiddle &&
        topLeft === topRight
    ) {
        alert(`${topLeft} wins!`);
        realReset();
        return;
    }
    if (
        middleLeft !== undefined &&
        middleLeft === middle &&
        middleLeft === middleRight
    ) {
        alert(`${middleLeft} wins!`);
        realReset();
        return;
    }
    if (
        bottomLeft !== undefined &&
        bottomLeft === bottomMiddle &&
        bottomLeft === bottomRight
    ) {
        alert(`${bottomLeft} wins!`);
        realReset();
        return;
    }
    if (
        topLeft !== undefined &&
        topLeft === middle &&
        topLeft === bottomRight
    ) {
        alert(`${topLeft} wins!`);
        realReset();
        return;
    }
    if (
        bottomLeft !== undefined &&
        bottomLeft === middle &&
        bottomLeft === topRight
    ) {
        alert(`${bottomLeft} wins!`);
        realReset();
        return;
    }
    if (
        topLeft !== undefined &&
        topLeft === middleLeft &&
        topLeft === bottomLeft
    ) {
        alert(`${topLeft} wins!`);
        realReset();
        return;
    }
    if (
        topMiddle !== undefined &&
        topMiddle === middle &&
        topMiddle === bottomMiddle
    ) {
        alert(`${topMiddle} wins!`);
        realReset();
        return;
    }
    if (
        topRight !== undefined &&
        topRight === middleRight &&
        topRight === bottomRight
    ) {
        alert(`${topRight} wins!`);
        realReset();
        return;
    }

    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner");
        realReset();
    }
}

function realReset() {
    // !not a real reset; well, it is sort of
    const btn = document.getElementById('reset');
    btn.addEventListener('click', reset);
    function reset() {
        // const table = document.querySelector('table');
        // table.innerText = '';
        const td = document.querySelectorAll('td');
        for (let i = 0; i < td.length; i++) {
            console.log(td[i]);
            td[i].innerText = '';
        }
    }
    board = [];
}

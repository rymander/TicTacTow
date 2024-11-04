console.log('Connected')

// Tic Tac Toe Game
class TicTacToe {
    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.isGameActive = true;
    }

    makeMove(row, col) {
        if (!this.isGameActive) {
            alert('Game has ended. Please restart to play again.');
            return;
        }
        if (this.board[row][col] !== '') {
            alert('Invalid move! Cell already taken.');
            return;
        }
        this.board[row][col] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.printBoard();
    }

    checkWinner() {
        const winningCombinations = [
            // Horizontal
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Vertical
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonal
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a[0]][a[1]] && 
                this.board[a[0]][a[1]] === this.board[b[0]][b[1]] && 
                this.board[a[0]][a[1]] === this.board[c[0]][c[1]]) {
                alert(`Player ${this.currentPlayer} wins!`);
                this.isGameActive = false;
                return;
            }
        }

        if (this.board.flat().every(cell => cell !== '')) {
            alert("It's a draw!");
            this.isGameActive = false;
        }
    }

    printBoard() {
        // This method will be overridden in the HTML script
    }

    restartGame() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.isGameActive = true;
        this.printBoard(); // This will also be overridden
    }
}


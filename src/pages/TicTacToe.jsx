import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winnerInfo = calculateWinner(board);
    const winner = winnerInfo ? winnerInfo.winner : null;
    const winningSquares = winnerInfo ? winnerInfo.line : [];

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => {
        const isWinningSquare = winningSquares.includes(index);
        return (
            <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-24 h-24 text-4xl font-bold flex items-center justify-center rounded-xl transition-all duration-300 transform active:scale-90
          ${board[index] ? 'cursor-default' : 'hover:bg-blue-50 cursor-pointer'}
          ${isWinningSquare ? 'bg-green-100 text-green-600 scale-105 shadow-lg' : 'bg-white text-gray-800 shadow-md'}
          ${board[index] === 'X' ? 'text-blue-600' : 'text-rose-600'}
        `}
            >
                {board[index]}
            </button>
        );
    };

    const status = winner
        ? `Winner: ${winner}`
        : board.every(square => square)
            ? "It's a Draw!"
            : `Next Player: ${isXNext ? 'X' : 'O'}`;

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                    Tic Tac Toe
                </h1>
                <p className="text-slate-500 font-medium">Classic XO Game Challenge</p>
            </div>

            <div className={`mb-6 text-2xl font-bold px-6 py-2 rounded-full shadow-sm bg-white 
        ${winner ? 'text-green-600 animate-bounce' : 'text-slate-700'}
      `}>
                {status}
            </div>

            <div className="grid grid-cols-3 gap-4 bg-slate-200 p-4 rounded-2xl shadow-xl">
                {board.map((_, i) => renderSquare(i))}
            </div>

            <div className="mt-10 flex gap-4">
                <button
                    onClick={resetGame}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg hover:shadow-indigo-200 hover:scale-105 transition-all duration-300"
                >
                    Reset Game
                </button>
                <Link
                    to="/"
                    className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold shadow-sm hover:bg-slate-50 transition-all duration-300"
                >
                    Back to Home
                </Link>
            </div>

            {/* Footer Info */}
            <div className="mt-12 text-slate-400 text-sm flex gap-6">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    Player X
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    Player O
                </div>
            </div>
        </div>
    );
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: lines[i] };
        }
    }
    return null;
}

export default TicTacToe;

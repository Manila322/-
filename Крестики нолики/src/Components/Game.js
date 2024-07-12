import React, { useState } from 'react';
import Field from './Field/FieldLayout';
import Information from './Information/InformationLayout';

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			checkWinner(newField);
			togglePlayer();
		}
	};

	const checkWinner = (fld) => {
		const winPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winPatterns.length; i++) {
			const [a, b, c] = winPatterns[i];
			if (fld[a] && fld[a] === fld[b] && fld[a] === fld[c]) {
				setIsGameEnded(true);
				return;
			}
		}

		if (fld.every((cell) => cell)) {
			setIsDraw(true);
		}
	};

	const togglePlayer = () => {
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<div className="game">
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} onCellClick={handleCellClick} />
			<button onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

export default Game;

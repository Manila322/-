import React from 'react';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<div className="information">
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</div>
	);
};

export default Information;

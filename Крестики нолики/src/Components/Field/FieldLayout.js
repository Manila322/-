import React from 'react';

const Field = ({ field, onCellClick }) => {
	return (
		<div className="field">
			{field.map((cell, index) => (
				<button key={index} onClick={() => onCellClick(index)}>
					{cell}
				</button>
			))}
		</div>
	);
};

export default Field;

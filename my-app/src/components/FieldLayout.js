import React from 'react';

export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className="game">
			<div className="board">
				{field.map((value, index) => (
					<button
						key={index}
						className="cell"
						onClick={() => onCellClick(index)}
					>
						{value}
					</button>
				))}
			</div>
		</div>
	);
};

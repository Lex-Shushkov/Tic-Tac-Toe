export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className="board">
			{field.map((value, index) => (
				<button key={index} className="cell" onClick={() => onCellClick(index)}>
					{value}
				</button>
			))}
		</div>
	);
};

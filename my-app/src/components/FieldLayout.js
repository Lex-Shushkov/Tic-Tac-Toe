import PropTypes from 'prop-types';

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
FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
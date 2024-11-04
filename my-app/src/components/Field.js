import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
}) => {
	const winning = (sq) => { // проверяет выйгрышную комбинацию
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
		for (let line of lines) { // проходим по массиву lines
			const [a, b, c] = line;
			if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) { // если ячейка анята и совпадает с выйгрышной комбинацией 
				return sq[a]; // выйгрышный символ
			}
		}
		return null; // иначе возвращаем пусто
	};

	const click = (index) => {
		// console.log(index);
		if (field[index] || winning(field)) return; // если клетка занята, то выходим
		console.log(index);
		const newField = [...field]; // в новый массив поля запишем текущее поле
		newField[index] = currentPlayer; // запишем в ячейку текущего игрока
		setField(newField); // обновляем состояние поля
		console.log(newField);

		const winner = winning(newField); // проверяем на победу
		if (winner) {
			setIsGameEnded(true); // флаг игра окончена
		} else if (!newField.includes('')) {
			setIsDraw(true); // если нет пустых клеток, то флаг ничья
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // игра продолжается, переключаем игрока
		}
	};

	return <FieldLayout field={field} onCellClick={click} />;
};
Field.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
	setField: PropTypes.array,
	currentPlayer:PropTypes.string,
	setCurrentPlayer:PropTypes.string,
	setIsGameEnded:PropTypes.bool,
	setIsDraw:PropTypes.bool,
};
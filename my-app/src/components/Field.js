import { FieldLayout } from './FieldLayout';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
}) => {
	const winning = (sq) => {
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
		for (let line of lines) {
			const [a, b, c] = line;
			if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
				return sq[a];
			}
		}
		return null;
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

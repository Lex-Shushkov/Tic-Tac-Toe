
import './Game.css';
import { useState } from 'react';
import { Field } from './components/Field';
import { Information } from './components/Information';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [field, setField] = useState(Array(9).fill('')); // игровое поле
	const [currentPlayer, setCurrentPlayer] = useState('X'); // чей ход
	const [isGameEnded, setIsGameEnded] = useState(false); //была ли завершена игра
	const [isDraw, setIsDraw] = useState(false); //была ли ничья

	const restart = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<GameLayout>
			<div className="game">
				<Information
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
				<Field
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					setIsGameEnded={setIsGameEnded}
					setIsDraw={setIsDraw}
				/>
				<div className="rest-cell">
					<button className="rest" onClick={restart}>
						Начать заново
					</button>
				</div>
			</div>
		</GameLayout>
	);
};

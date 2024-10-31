import React from 'react';
import { FieldLayout } from './FieldLayout';

export const Field = ({ field }) => {
	const click = (index) => {
		console.log('сделан ход', index);
	};

	return <FieldLayout field={field} onCellClick={click}/>;
};

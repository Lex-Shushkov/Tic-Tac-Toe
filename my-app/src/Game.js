import React from 'react';
import './Game.css';
import { useState } from 'react';
import {Field} from './components/Field';

export const Game = () => {
	const [field, setField] = useState(Array(9).fill(' '));
	return <Field field={field}/>
};

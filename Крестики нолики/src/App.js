import React from 'react';
import Game from './Components/Game';
import './App.css';

export const App = () => {
	return (
		<React.StrictMode>
			<div className="app">
				<h1>Игра "Крестики-нолики"</h1>
				<Game />
			</div>
		</React.StrictMode>
	);
};

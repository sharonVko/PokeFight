import {createContext, useContext, useEffect, useState} from 'react';

const Context = createContext();
export const UseContextStore = () => useContext(Context);
export const ContextProvider = ({children}) => {

	const [playerName, setPlayerName] = useState('unknown');
	const [currentPlayerId, setCurrentPlayerId] = useState(null);
	const [pokemonData, setPokemonData] = useState(null);
	const [playerData, setPlayerData] = useState(null);
	const [openCard1, setOpenCard1] = useState(null);
	const [openCard2, setOpenCard2] = useState(null);

	useEffect(() => {
	}, []);

	const values = {
		playerName,
		setPlayerName,
		playerData,
		setPlayerData,
		pokemonData,
		setPokemonData,
		openCard1,
		setOpenCard1,
		openCard2,
		setOpenCard2,
		currentPlayerId,
		setCurrentPlayerId
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
}

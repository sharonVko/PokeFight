import { createContext, useContext, useEffect, useState } from "react";
//Der contextprovider verwaltet alle globalen Variablen
const Context = createContext();
export const UseContextStore = () => useContext(Context);
export const ContextProvider = ({ children }) => {
  //Hier werden alle Variablen bestimmt,die global verwendet werden sollen
  const [playerName, setPlayerName] = useState("unknown");
  const [pokemonData, setPokemonData] = useState(null);
  const [openCard1, setOpenCard1] = useState(null);
  const [openCard2, setOpenCard2] = useState(null);

  useEffect(() => {}, []); //noch nicht in Verwendung

  const values = {
    playerName,
    pokemonData,
    setPlayerName,
    setPokemonData,
    openCard1,
    setOpenCard1,
    openCard2,
    setOpenCard2,
  };
  //Die values werden übergeben, um sie global zu nutzen
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

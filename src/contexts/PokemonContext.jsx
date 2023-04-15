import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';

const PokemonContext = createContext("");

const PokemonProvider = ({ children }) => {

  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemonInfos, setPokemonInfos] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);


  return (
    <PokemonContext.Provider value={{ pokemonSearch, setPokemonSearch, pokemonData, setPokemonData, pokemonId, setPokemonId, pokemonInfos, setPokemonInfos, pokemonType, setPokemonType }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext);
export default PokemonProvider;

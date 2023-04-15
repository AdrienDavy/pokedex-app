import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';

const PokemonContext = createContext("");

const PokemonProvider = ({ children }) => {

  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokemonSearch, setPokemonSearch, pokemonData, setPokemonData }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext);
export default PokemonProvider;

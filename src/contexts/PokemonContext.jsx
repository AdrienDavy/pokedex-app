import React, { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const PokemonContext = createContext("");



const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);


  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext);
export default PokemonProvider;

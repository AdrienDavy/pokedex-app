import React, { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const PokemonContext = createContext("");



const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const handleChangePokemon = (e) => {
    setPokemon(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemon}`)
      .then((resp) => { setPokemonData([resp.data]) })
      .catch((err) => { console.log(err); })
  }


  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData, handleChangePokemon, handleSubmit, pokemon, setPokemon, pokemonDetails, setPokemonDetails }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext);
export default PokemonProvider;

import React, { useEffect } from 'react';
import './Pokemon.css';
import pokedexLeft from '../../assets/pokedex-left.svg';
import axios from 'axios';
import { usePokemon } from '../../contexts/PokemonContext';
const Pokemon = () => {
  const { pokemonSearch, setPokemonSearch, pokemonData, setPokemonData, pokemonId, setPokemonId } = usePokemon();

  useEffect(() => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonSearch}`)
      .then(res => {
        setPokemonData(res.data);
        setPokemonId(res.data.id);
      })
  }, [pokemonData, pokemonId])


  return (
    <div className='pokemon-screen'>
      <img src={pokemonData.image} alt={pokemonData.name} className='pokemon-picture' />
      <img src={pokedexLeft} alt="pokedex left part" className='pokedex-left' />
    </div>
  );
};

export default Pokemon;

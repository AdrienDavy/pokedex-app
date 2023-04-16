import React from 'react';
import './Pokemon.css';
import pokedexLeft from '../../assets/pokedex-left.svg';
import { usePokemon } from '../../contexts/PokemonContext';
const Pokemon = () => {
  const { pokemonData } = usePokemon();

  return (
    <div className='pokemon-screen'>
      <h1> {pokemonData.pokedexId ? '#' + pokemonData?.pokedexId : null}</h1>
      <img src={pokemonData.image} alt={pokemonData.name} className='pokemon-picture' />
      <img src={pokedexLeft} alt="pokedex left part" className='pokedex-left' />
    </div>
  );
};

export default Pokemon;

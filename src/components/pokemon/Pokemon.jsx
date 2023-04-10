import React, { useEffect } from 'react';
import axios from 'axios';
import './Pokemon.css';
import pokedexLeft from '../../assets/pokedex-left.svg';
import { usePokemon } from '../../contexts/PokemonContext';

const Pokemon = ({ pokemon }) => {
  // const { pokemonData, setPokemonData, handleChangePokemon, pokemon } = usePokemon();
  return (
    <div className='pokemon-screen' >
      <img src={pokemon.image} alt="Pokemon Picture" className='pokemon-picture' />
      <img src={pokedexLeft} alt="pokedex left part" className='pokedex-left' />
    </div>
  )
};

export default Pokemon;

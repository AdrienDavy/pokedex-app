import React from 'react';
import './InfoPokemon.css';
import pokedexRight from '../../assets/pokedex-right.svg';
import { usePokemon } from '../../contexts/PokemonContext';

const InfoPokemon = () => {
  const { pokemonData } = usePokemon();

  return (
    <div className='info-pokemon'>
      <div className="infos">
        <h1>Version: {pokemonData?.version}</h1>
        <h1>Type: {pokemonData?.type}</h1>
        <h1>Taille: {pokemonData?.height}</h1>
        <h1>Poids: {pokemonData?.weight}</h1>
      </div>

      <img src={pokedexRight} alt="pokedex" className='pokedex-right' />
    </div>
  )
};

export default InfoPokemon;

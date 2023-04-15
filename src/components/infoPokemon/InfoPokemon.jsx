import React from 'react';
import './InfoPokemon.css';
import pokedexRight from '../../assets/pokedex-right.svg';
import { usePokemon } from '../../contexts/PokemonContext';

const InfoPokemon = () => {
  const { pokemonData, setPokemonData, pokemonInfos, setPokemonInfos, pokemonType, setPokemonType } = usePokemon();

  console.log("pokemonData?.apiTypes", pokemonType);


  return (
    <div className='info-pokemon'>
      <div className="infos">
        <h1>Type:{pokemonType} </h1>
        <h1>Versions:  </h1>
        <h1>Taille: {pokemonInfos?.height}</h1>
        <h1>Poids: {pokemonInfos?.weight}</h1>
      </div>

      <img src={pokedexRight} alt="pokedex" className='pokedex-right' />
    </div>
  )
};

export default InfoPokemon;

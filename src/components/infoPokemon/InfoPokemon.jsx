import React from 'react';
import './InfoPokemon.css';
import pokedexRight from '../../assets/pokedex-right.svg';
import { usePokemon } from '../../contexts/PokemonContext';

const InfoPokemon = () => {
  const { pokemonData, setPokemonData, pokemonInfos, setPokemonInfos, pokemonType, setPokemonType, pokemonTypeImage, setPokemonTypeImage } = usePokemon();



  return (
    <div className='info-pokemon'>
      <ul className="infos">
        <li>{pokemonData?.name}</li>
        <li>Type:{pokemonType} </li>
        <li>Taille: {pokemonInfos?.height}</li>
        <li>Poids: {pokemonInfos?.weight}</li>
        <div className='image-container'>
          {pokemonTypeImage[0] ? <img src={pokemonTypeImage[0]} alt={pokemonData.name} className='type-image' /> : null}
          {pokemonTypeImage[1] ? <img src={pokemonTypeImage[1]} alt={pokemonData.name} className='type-second-image' /> : null}
        </div>
      </ul>

      <img src={pokedexRight} alt="pokedex" className='pokedex-right' />
    </div>
  )
};

export default InfoPokemon;

import React from 'react';
import './PokemonCard.css';

const CardPokemon = ({ pokemon }) => {
  return (
    <div className='pokemon-card'>
      <img src={pokemon.image} alt="Pokemon Picture" className='pokemon-picture' />
    </div>
  )
};

export default CardPokemon;

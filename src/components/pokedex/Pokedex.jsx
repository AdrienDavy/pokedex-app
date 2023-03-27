import React from 'react';
import './Pokedex.css';
import pokedexLeft from '../../assets/pokedex-left.svg';
import pokedexRight from '../../assets/pokedex-right.svg';

const Pokedex = () => {
  return (
    <div className='pokedex-container'>
      <img src={pokedexLeft} alt="pokedex" className='pokedex' />
      <img src={pokedexRight} alt="pokedex" className='pokedex' />
    </div>
  )
};

export default Pokedex;

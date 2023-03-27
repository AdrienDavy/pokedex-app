import React from 'react';
import './Pokedex.css';
import pokedexPicture from '../../assets/pokedex.svg'

const Pokedex = () => {
  return (
    <div className='pokedex-container'>
      <img src={pokedexPicture} alt="pokedex" className='pokedex' />
    </div>
  )
};

export default Pokedex;

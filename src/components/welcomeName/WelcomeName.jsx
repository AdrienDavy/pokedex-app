import React from 'react';
import './WelcomeName.css';
import Pokeball from '../../assets/pokeball.svg'

const WelcomeName = () => {
  return (
    <div className='welcome-container'>
      <h1>Bienvenue sur ton Pokédex</h1>
    <h2>Choisis ton nom de dresseur !</h2>
    <input type="text" />
    <button className='btn'>
      <img src={Pokeball} alt="Pokéball" className='btn-image' />
    </button>
    </div>
  )
};

export default WelcomeName;

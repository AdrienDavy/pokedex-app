import React, { useRef, useState, useEffect } from 'react';
import './WelcomeName.css';
import Pokeball from '../../assets/pokeball.png';

import { Link } from 'react-router-dom';
import { useSound } from '../../contexts/SoundContext';

const WelcomeName = () => {
  const { handleClick } = useSound();
  return (
    <div className='welcome-container'>
      <h1>Bienvenue sur ton Pokédex</h1>
      <h2>Choisis ton nom de dresseur !</h2>
      <input type="text" className='dresseur' />
      <div onClick={handleClick}>
        <Link to="/pokedex">
          <img src={Pokeball} alt="Pokéball" className='btn-image' />
        </Link>
      </div>
    </div>
  )
};

export default WelcomeName;

import React, { useRef } from 'react';
import './WelcomeName.css';
import Pokeball from '../../assets/pokeball.png';
import click from '../../assets/click.mp3'

const WelcomeName = () => {
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
    console.log(audioRef);
  }

  return (
    <div className='welcome-container'>
      <h1>Bienvenue sur ton Pokédex</h1>
      <h2>Choisis ton nom de dresseur !</h2>
      <input type="text" />
      <div onClick={handleClick}>
        <audio ref={audioRef}>
          <source src={click} type="audio/mp3" />
        </audio>
        <img src={Pokeball} alt="Pokéball" className='btn-image' />
      </div>
    </div>
  )
};

export default WelcomeName;

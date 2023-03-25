import React, { useRef, useState, useEffect } from 'react';
import './WelcomeName.css';
import Pokeball from '../../assets/pokeball.png';
import { Link } from 'react-router-dom';
import { useSound } from '../../contexts/SoundContext';
import clickSound from '../../assets/click.mp3';
import pokemonMusic from '../../assets/intro.mp3';
import playButtonIcon from '../../assets/play-button.png';
import pauseButtonIcon from '../../assets/pause-button.png';
import soundOnIcon from '../../assets/soundOn.png'
import muteIcon from '../../assets/mute.png';
import musicPlayer from '../../assets/music-player.svg';

const WelcomeName = () => {
  const { handleClickSoundButton } = useSound();
  return (
    <div className='welcome-container'>
      <h1>Bienvenue sur ton Pokédex</h1>
      <h2>Choisis ton nom de dresseur !</h2>
      <input type="text" className='dresseur' />
      <div onClick={handleClickSoundButton}>
        <Link to="/pokedex">
          <img src={Pokeball} alt="Pokéball" className='btn-image' />
        </Link>
      </div>
    </div>
  )
};

export default WelcomeName;

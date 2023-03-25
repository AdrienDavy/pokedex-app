import React, { useRef, useState, useEffect } from 'react';
import './WelcomeName.css';
import Pokeball from '../../assets/pokeball.png';
import { useSound } from '../../contexts/SoundContext';
import { useTransition } from '../../contexts/TransitionContext';


const WelcomeName = () => {
  const { handleClickSoundButton } = useSound();
  const { handleTransitionButton, isHidden, setIsHidden } = useTransition();
  return (
    <div className={isHidden ? 'welcome-container-hidden' : 'welcome-container'}>
      <h1>Bienvenue sur ton Pokédex</h1>
      <h2>Choisis ton nom de dresseur !</h2>
      <input type="text" className='dresseur' />
      <div onClick={() => { handleTransitionButton(); handleClickSoundButton() }}>
        <img src={Pokeball} alt="Pokéball" className='btn-image' />
      </div>
    </div>
  )
};

export default WelcomeName;

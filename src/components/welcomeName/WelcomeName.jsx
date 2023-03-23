import React, { useRef, useState } from 'react';
import './WelcomeName.css';
import Pokeball from '../../assets/pokeball.png';
import SoundOn from '../../assets/soundOn.png';
import Mute from '../../assets/mute.png';
import click from '../../assets/click.mp3';
import intro from '../../assets/intro.mp3';


const WelcomeName = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.3;
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className='welcome-container'>
      <h1>Bienvenue sur ton Pokédex</h1>
      <h2>Choisis ton nom de dresseur !</h2>
      <audio ref={audioRef} autoPlay muted={isMuted}>
        <source src={intro} type="audio/mp3" />
      </audio>
      <input type="text" />
      <div onClick={handleClick}>
        <audio ref={audioRef} muted={isMuted}>
          <source src={click} type="audio/mp3" />
        </audio>
        <img src={Pokeball} alt="Pokéball" className='btn-image' />
      </div>
      <input type="range" />
      <div onClick={toggleMute}>
        {isMuted ? <img src={Mute} alt="Pokéball" className='sound' /> : <img src={SoundOn} alt="Pokéball" className='sound' />}
      </div>


    </div>
  )
};

export default WelcomeName;

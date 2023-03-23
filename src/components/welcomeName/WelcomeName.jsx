import React, { useRef, useState, useEffect } from 'react';
import './WelcomeName.css';
import Pokeball from '../../assets/pokeball.png';
import SoundOn from '../../assets/soundOn.png';
import Mute from '../../assets/mute.png';
import click from '../../assets/click.mp3';
import intro from '../../assets/intro.mp3';


const WelcomeName = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const audioRef = useRef(null);
  const music = useRef(null);

  //control volume
  const handleChangeVolume = (e) => {
    setVolume(e.target.value);
    music.current.volume = e.target.value;
  }

  useEffect(() => {
    music.current.volume = volume;
  }, [volume]);

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
      <input type="text" className='dresseur' />
      <div onClick={handleClick}>
        <audio ref={audioRef} muted={isMuted}>
          <source src={click} type="audio/mp3" />
        </audio>
        <img src={Pokeball} alt="Pokéball" className='btn-image' />
      </div>
      <div onClick={toggleMute}>
        {isMuted ? <img src={Mute} alt="Pokéball" className='sound' /> : <img src={SoundOn} alt="Pokéball" className='sound' />}
      </div>
      <div className="volume">
        <audio ref={music} autoPlay muted={isMuted}>
          <source src={intro} type="audio/mpeg" />
        </audio>
        <input type="range" min="0" max="1" step="0.01" value={volume}
          onChange={handleChangeVolume} className='range' />
        <h3>Volume</h3>
      </div>
    </div>
  )
};

export default WelcomeName;

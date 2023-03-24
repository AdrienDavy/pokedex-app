import React from 'react';
import PagePokedex from './pages/pagePokedex/PagePokedex';
import Welcome from './pages/welcome/Welcome';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SoundProvider, { useSound } from './contexts/SoundContext';
import click from './assets/click.mp3';
import intro from './assets/intro.mp3';
import SoundOn from './assets/soundOn.png';
import Mute from './assets/mute.png';

function App() {
  return (
    <div className="App">
      <SoundProvider>
        <VolumeControl />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pokedex" element={<PagePokedex />} />
        </Routes>
      </SoundProvider>
    </div>
  );
}

function VolumeControl() {
  const { isMuted, setIsMuted, volume, setVolume, audioRef, music, handleChangeVolume, handleClick, toggleMute } = useSound();

  return (<div>
    <div onClick={toggleMute}>
      {isMuted ? <img src={Mute} alt="Pokéball" className='sound' /> : <img src={SoundOn} alt="Pokéball" className='sound' />}
    </div>
    <audio ref={audioRef} muted={isMuted}>
      <source src={click} type="audio/mp3" />
    </audio>
    <div className="volume">
      <audio ref={music} autoPlay muted={isMuted}>
        <source src={intro} type="audio/mpeg" />
      </audio>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleChangeVolume}
        className="range"
      />
      <h3>Volume</h3>
    </div>
  </div>
  );
}

export default App;

import React from "react";
import './MusicPlayerComponent.css';
import musicPlayer from '../../assets/music-player.svg';
import soundOnIcon from '../../assets/soundOn.png';
import muteIcon from '../../assets/mute.png';
import playButtonIcon from '../../assets/play-button.png';
import pauseButtonIcon from '../../assets/pause-button.png';
import clickSound from '../../assets/click.mp3';
import pokemonMusic from '../../assets/intro.mp3';
import SoundProvider, { useSound } from "../../contexts/SoundContext";

function MusicPlayerComponent() {
  const { isMuted, volume, clickSoundRef, music, handleChangeVolume, toggleMuteButton, isPlaying, setIsPlaying, handlePlayPause } = useSound();

  return (<div>


    <div className="musicZone">
      <img src={musicPlayer} alt="Music Player" className='musicPlayer' />
      <div onClick={toggleMuteButton}>
        {isMuted ? <img src={muteIcon} alt="Sound On button" className='toggleMute' /> : <img src={soundOnIcon} alt="Mute button" className='toggleMute' />}
      </div>
      <div onClick={handlePlayPause}>
        {isPlaying ? <img src={pauseButtonIcon} alt="Pause button" className='playPauseButton' /> : <img src={playButtonIcon} alt="Play button" className='playPauseButton' />}
      </div>
      <audio ref={clickSoundRef} muted={isMuted}>
        <source src={clickSound} type="audio/mp3" />
      </audio>
      <audio ref={music} muted={isMuted}>
        <source src={pokemonMusic} type="audio/mpeg" />
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

export default MusicPlayerComponent;
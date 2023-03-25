import React, { useState, useContext, useRef, createContext } from 'react';
const SoundContext = createContext("");

const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const audioRef = useRef(null);
  const music = useRef(null);
  //control volume
  const toggleMuteButton = () => {
    setIsMuted(!isMuted) // change state of mute button
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      music.current.pause(); // freeze music
    } else {
      setIsPlaying(true);
      music.current.play(); // Play music
    }
  };

  const handleChangeVolume = (e) => {
    setVolume(e.target.value);
    music.current.volume = e.target.value;
  }

  const handleClickSoundButton = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.3;
  }
  return (
    <SoundContext.Provider value={{ isMuted, setIsMuted, volume, setVolume, audioRef, music, handleChangeVolume, handleClickSoundButton, toggleMuteButton, isPlaying, setIsPlaying, handlePlayPause }
    }>
      {children}
    </SoundContext.Provider>

  );
};
export const useSound = () => useContext(SoundContext)

export default SoundProvider;

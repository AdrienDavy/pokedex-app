import React, { useState, useContext, useRef, createContext } from 'react';
const SoundContext = createContext("");

const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);
  const audioRef = useRef(null);
  const music = useRef(null);
  //control volume
  const handleChangeVolume = (e) => {
    setVolume(e.target.value);
    music.current.volume = e.target.value;
  }

  const handleClick = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.3;
  }
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }
  return (
    <SoundContext.Provider value={{ isMuted, setIsMuted, volume, setVolume, audioRef, music, handleChangeVolume, handleClick, toggleMute }
    }>
      {children}
    </SoundContext.Provider>

  );
};
export const useSound = () => useContext(SoundContext)

export default SoundProvider;

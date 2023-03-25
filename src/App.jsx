import React from 'react';
import PagePokedex from './pages/pagePokedex/PagePokedex';
import Welcome from './pages/welcome/Welcome';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SoundProvider from './contexts/SoundContext';
import MusicPlayerComponent from './components/musicPlayerComponent/MusicPlayerComponent'

function App() {
  return (
    <div className="App">
      <SoundProvider>
        <MusicPlayerComponent />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pokedex" element={<PagePokedex />} />
        </Routes>
      </SoundProvider>
    </div>
  );
}



export default App;

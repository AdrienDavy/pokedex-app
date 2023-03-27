import React from 'react';
import PagePokedex from './pages/pagePokedex/PagePokedex';
import Welcome from './pages/welcome/Welcome';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SoundProvider from './contexts/SoundContext';
import TransitionProvider from './contexts/TransitionContext';
import MusicPlayerComponent from './components/musicPlayerComponent/MusicPlayerComponent'

function App() {
  return (
    <div className="App">
      <TransitionProvider>
        <SoundProvider>
          <MusicPlayerComponent />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/pokedex" element={<PagePokedex />} />
          </Routes>
        </SoundProvider>
      </TransitionProvider>
    </div>
  );
}



export default App;

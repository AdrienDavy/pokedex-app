import React from 'react';
import PagePokedex from './pages/pagePokedex/PagePokedex';
import Welcome from './pages/welcome/Welcome';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SoundProvider from './contexts/SoundContext';
import TransitionProvider from './contexts/TransitionContext';
import MusicPlayerComponent from './components/musicPlayerComponent/MusicPlayerComponent'
import PokemonProvider from './contexts/PokemonContext';

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <TransitionProvider>
          <SoundProvider>
            <MusicPlayerComponent />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/pokedex" element={<PagePokedex />} />
            </Routes>
          </SoundProvider>
        </TransitionProvider>
      </PokemonProvider>
    </div>
  );
}



export default App;

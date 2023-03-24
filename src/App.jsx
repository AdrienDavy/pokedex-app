import React from 'react';
import PagePokedex from './pages/pagePokedex/PagePokedex';
import Welcome from './pages/welcome/Welcome';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/pokedex" element={<PagePokedex />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;

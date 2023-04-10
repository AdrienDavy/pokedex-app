import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';
import { usePokemon } from '../../contexts/PokemonContext';

const Navbar = () => {
  const { pokemonData, setPokemonData, handleChangePokemon, handleSubmit, pokemon, setPokemon, pokemonDetails, setPokemonDetails } = usePokemon();


  return (
    <div className='navbar-container'>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" value={pokemon} onChange={handleChangePokemon} placeholder='ex: Pikachu' />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
};

export default Navbar;

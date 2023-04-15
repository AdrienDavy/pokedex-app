import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import { usePokemon } from '../../contexts/PokemonContext';

const Navbar = () => {
  const { pokemonSearch, setPokemonSearch, pokemonData, setPokemonData } = usePokemon()




  useEffect(() => {
    const pokebuildapi = `https://pokebuildapi.fr/api/v1/pokemon/${pokemonSearch}`;
    // const pokeapi = `https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)}`;
    axios
      .get(pokebuildapi)
      .then(res => {
        console.log("res.data", res.data);
        setPokemonData(res.data)
      })
  }, [])
  const submitPokemon = (e) => {
    e.preventDefault()
    setPokemonData(pokemonSearch)
  }
  return (
    <div className="navbar-container">
      <div className="search">
        <form onSubmit={submitPokemon}>
          <input
            type="text"
            value={pokemonSearch}
            placeholder="ex: Pikachu"
            onChange={(e) => setPokemonSearch(e.target.value)}
          />
          <button type="submit" >Search</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;

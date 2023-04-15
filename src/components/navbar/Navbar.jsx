import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import { usePokemon } from '../../contexts/PokemonContext';

const Navbar = () => {
  const { pokemonSearch, setPokemonSearch, pokemonData, setPokemonData, pokemonId, setPokemonId } = usePokemon()




  useEffect(() => {
    const pokebuildapi = `https://pokebuildapi.fr/api/v1/pokemon/${pokemonSearch}`;
    // const pokeapi = `https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)}`;
    axios
      .get(pokebuildapi)
      .then(res => {
        console.log("res.data", res.data);
        setPokemonData(res.data)
        setPokemonId(res.data.id)
      })
      .catch(err => console.log(err))
  }, [])

  const submitPokemon = (e) => {
    e.preventDefault()
    setPokemonData(pokemonSearch)
    setPokemonId(pokemonId);
  }

  // useEffect(() => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)}`)
  //     .then
  // }
  //   , [])

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

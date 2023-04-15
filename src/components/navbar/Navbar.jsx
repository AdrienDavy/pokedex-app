import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import { usePokemon } from '../../contexts/PokemonContext';

const Navbar = () => {
  const { pokemonSearch, setPokemonSearch, setPokemonData, pokemonId, setPokemonId, setPokemonInfos, pokemonType, setPokemonType } = usePokemon()

  useEffect(() => {
    const pokebuildapi = `https://pokebuildapi.fr/api/v1/pokemon/${pokemonSearch}`;
    axios
      .get(pokebuildapi)
      .then(res => {
        console.log("res.data", res.data);
        setPokemonData(res.data);
        setPokemonId(res.data.id);
        setPokemonType(res.data.apiTypes.map((p) => p.name).join(","))
      })
      .catch(err => console.log(err))
  }, [pokemonSearch])


  useEffect(() => {
    const pokeapi = `https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)}`;
    axios
      .get(pokeapi)
      .then(res => {
        setPokemonInfos(res.data)

      })
  }
    , [pokemonId])

  return (
    <div className="navbar-container">
      <div className="search">
        <form>
          <input
            type="text"
            value={pokemonSearch}
            placeholder="ex: Pikachu"
            onChange={(e) => setPokemonSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;

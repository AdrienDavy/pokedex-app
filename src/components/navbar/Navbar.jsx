import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import { usePokemon } from '../../contexts/PokemonContext';

const Navbar = () => {
  const { pokemonSearch, setPokemonSearch, setPokemonData, pokemonId, setPokemonId, pokemonInfos, setPokemonInfos, pokemonType, setPokemonType, pokemonTypeImage, setPokemonTypeImage } = usePokemon()

  useEffect(() => {
    const pokebuildapi = `https://pokebuildapi.fr/api/v1/pokemon/${pokemonSearch}`;
    axios
      .get(pokebuildapi)
      .then(res => {
        console.log("res.data", res.data);
        setPokemonData(res.data);
        setPokemonId(res.data.id);
        setPokemonType(res.data.apiTypes.map((type) => type.name).join("/"));
        setPokemonTypeImage(res.data.apiTypes.map((type) => type.image));
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
    , [pokemonId, pokemonInfos])

  return (
    <div className="navbar-container">

      <form>
        <label htmlFor="recherche" className='recherche'>Recherche par nom de pokémon</label>
        <input
          type="text"
          value={pokemonSearch}
          placeholder="ex: Pikachu ou ID Pokédex"
          onChange={(e) => setPokemonSearch(e.target.value)}
          id='recherche'
        />
      </form>

    </div>
  );
};

export default Navbar;

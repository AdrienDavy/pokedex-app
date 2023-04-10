import React, { useEffect } from 'react';
import axios from 'axios';
import './InfoPokemon.css';
import pokedexRight from '../../assets/pokedex-right.svg';
import { usePokemon } from '../../contexts/PokemonContext';

const InfoPokemon = () => {
  const { pokemonData, setPokemonData, handleChangePokemon, handleSubmit, pokemon, setPokemon, pokemonDetails, setPokemonDetails } = usePokemon();

  useEffect(() => {
    if (pokemonData.length > 0) {
      const pokemonId = pokemonData[0].id;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((resp) => { setPokemonDetails(resp.data) })
        .catch((err) => { console.log(err); })
    }
  }, [pokemonData])
  return (

    <div className='info-pokemon'>
      <div className="infos">
        <h1>Version: {pokemonDetails && pokemonDetails.game_indices[0].version?.name}</h1>


        <h1>Type: {pokemonDetails && pokemonDetails.types[0].type.name}</h1>


        <h1>Taille: {pokemonDetails && pokemonDetails.height}</h1>


        <h1>Poids: {pokemonDetails && pokemonDetails.weight}</h1>
      </div>
      <img src={pokedexRight} alt="pokedex" className='pokedex-right' />
    </div>

  )
};

export default InfoPokemon;

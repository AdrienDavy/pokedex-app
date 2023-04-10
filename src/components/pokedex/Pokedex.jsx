import React, { useEffect } from 'react';
import axios from 'axios';
import './Pokedex.css';
import Pokemon from "../pokemon/Pokemon"
import PokemonCard from "../pokemonCard/PokemonCard"
import InfoPokemon from "../infoPokemon/InfoPokemon"
import { usePokemon } from '../../contexts/PokemonContext';
import axiosCacheAdapter from 'axios-cache-adapter';

const Pokedex = () => {
  const { pokemonData, setPokemonData, handleChangePokemon, pokemon, pokemonDetails, setPokemonDetails } = usePokemon();

  // Créer un adaptateur de cache pour Axios
  const cache = axiosCacheAdapter.setupCache({
    maxAge: 15 * 60 * 1000, // Mettre en cache les réponses pendant 15 minutes
  });

  // Créer une instance Axios avec l'adaptateur de cache
  const api = axios.create({
    adapter: cache.adapter,
  });

  useEffect(() => {
    api.get('https://pokebuildapi.fr/api/v1/pokemon/limit/1')
      .then(resp => {
        setPokemonData(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='pokedex-container'>
      <ul className='pokedex' id='podedex-left'>
        {
          pokemonData
            .map((pokemonMap) => (
              <li key={pokemonMap.id}>
                <Pokemon pokemon={pokemonMap} />
              </li>
            ))
        }
      </ul>
      <div className="pokedex" id='podedex-right'>
        <InfoPokemon />
      </div>
    </div >
  )
};

export default Pokedex;

import axios from "axios";
import React, { useEffect } from "react";
import { usePokemon } from "../contexts/PokemonContext";

const getPokemon = () => {
  const { setPokemonData, pokemonId } = usePokemon();
  const pokebuildapi = `https://pokebuildapi.fr/api/v1/pokemon/${pokemonSearch}`
  e.preventDefault()
  useEffect(() => {
    axios
      .get(pokebuildapi)
      .then((resp) => {
        console.log("pokebuildapi", resp.data);
        setPokemonData(resp.data)
        let pokemonId = resp.data.pokedexId;
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)}`)
          .then((resp) => {
            console.log("pokeApi", resp.data);
            setPokemonData(resp.data)
          })
          .catch((err) => {
            console.error('Error fetching Pokemon from pokeApi:', err)
            setPokemonData(null)
          })
          .catch((err) =>
            console.error('Error fetching Pokemon from pokebuild:', err))
      })
  }, [])
}


// POUR AVOIR LES VERSIONS !
useEffect(() => {
  const pokeapi = `https://pokeapi.co/api/v2/pokemon/${parseInt(pokemonId)}`;
  axios
    .get(pokeapi)
    .then(res => {
      setPokemonInfos(res.data)
      console.log(res.data.game_indices.map((v) => v.version));
      setPokemonVersion(res.data.game_indices.map((v) => v.version.url).slice(0, 2).join(","));
    })


  export default getPokemon;

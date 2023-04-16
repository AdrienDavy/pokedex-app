import React from 'react';
import './Pokedex.css';
import Pokemon from '../pokemon/Pokemon';
import InfoPokemon from '../infoPokemon/InfoPokemon';

const Pokedex = () => {

  return (
    <div className="pokedex-container">
      <ul className="pokedex" id="podedex-left">
        {<Pokemon />}
      </ul>
      <div className="pokedex" id="podedex-right">
        {<InfoPokemon />}
      </div>
    </div>
  );
};

export default Pokedex;

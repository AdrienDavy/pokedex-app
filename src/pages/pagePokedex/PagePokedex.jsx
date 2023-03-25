import React from 'react';
import './PagePokedex.css';
import Pokedex from '../../components/pokedex/Pokedex';
import { useTransition } from '../../contexts/TransitionContext';

const PagePokedex = () => {
  const { isHidden, setIsHidden } = useTransition();
  return (

    <div className={isHidden ? 'visible' : 'hidden'}>
      <Pokedex />
    </div>

  )
}

export default PagePokedex

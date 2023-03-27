import React, { useEffect, useState, } from 'react';
import './PagePokedex.css';
import Pokedex from '../../components/pokedex/Pokedex';
import { useTransition } from '../../contexts/TransitionContext';
import { useLocation } from "react-router-dom";

const PagePokedex = () => {
  const { isHidden, setIsHidden } = useTransition();
  const location = useLocation();

  useEffect(() => {
    setIsHidden(false)
  }, [location])



  return (
    // <div className={isHidden ? 'pokecomp' : 'fadeIn'}>
    <Pokedex />
    // </div>


  )
}

export default PagePokedex

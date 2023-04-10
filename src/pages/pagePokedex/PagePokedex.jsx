import React, { useEffect, useState, } from 'react';
import './PagePokedex.css';
import Pokedex from '../../components/pokedex/Pokedex';
import { useTransition } from '../../contexts/TransitionContext';
import { useLocation } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';

const PagePokedex = () => {
  const { isHidden, setIsHidden } = useTransition();
  const location = useLocation();

  useEffect(() => {
    setIsHidden(false)
  }, [location])



  return (
    <div className={isHidden ? 'pokecomp' : 'fadeIn'}>
      <div>
        <Navbar />
        <Pokedex />
      </div>
    </div>


  )
}

export default PagePokedex

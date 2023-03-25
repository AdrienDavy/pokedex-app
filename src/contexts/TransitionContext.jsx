import React, { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const TransitionContext = createContext("");



const TransitionProvider = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();
  const handleTransitionButton = () => {

    setIsHidden(true)
    setTimeout(() => {
      navigate('/pokedex')
    }, 2000);


  };

  return (
    <TransitionContext.Provider value={{ isHidden, setIsHidden, handleTransitionButton }}>
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext);
export default TransitionProvider;

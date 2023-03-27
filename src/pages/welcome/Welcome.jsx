import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Welcome.css";
import WelcomeName from "../../components/welcomeName/WelcomeName";
import { useTransition } from '../../contexts/TransitionContext';//PICTURES
import BigCloud from "../../assets/bigcloud.png";
import Cloud1 from "../../assets/cloud1.png";
import Cloud2 from "../../assets/cloud2.png";
import backgroundfield from "../../assets/backgroundfield.png";
import House from "../../assets/house.png";
import foreground from "../../assets/foreground.png";


const Welcome = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHidden, setIsHidden } = useTransition();
  const location = useLocation();

  useEffect(() => {
    setIsHidden(false)
  }, [location])
  const styles = [
    {
      name: "bigcloud",
      transform: `translate(calc(${mousePosition.x / -700}px), calc(${mousePosition.y / -700}px))`
    },
    {
      name: "cloud1",
      transform: `translate(calc(${mousePosition.x / -650}px), calc(${mousePosition.y / -650}px))`
    },
    {
      name: "cloud2",
      transform: `translate(calc(${mousePosition.x / -400}px), calc(${mousePosition.y / -400}px))`
    },
    {
      name: "backgroundfield",
      transform: `translate(calc(${mousePosition.x / -250}px), calc(${mousePosition.y / -250}px))`
    },
    {
      name: "house",
      transform: `translate(calc(${mousePosition.x / -400}px), calc(${mousePosition.y / -400}px))`
    },
    {
      name: "grassForeground",
      transform: `translate(calc(${mousePosition.x / -500}px), calc(${mousePosition.y / -500}px))`
    },
  ]

  const handleMouseMove = (e) => {

    setMousePosition({
      x: e.screenX,
      y: e.screenY,
    });
  };

  return (
    <div className={isHidden ? "fadeOut" : "active"}>
      <div className="sky" onMouseMove={handleMouseMove}>
        <WelcomeName />

        <img
          src={BigCloud}
          alt="cloud"
          className={styles[0].name}
          style={styles[0]}
        />
        <img
          src={Cloud1}
          alt="cloud"
          className={styles[1].name}
          style={styles[1]}
        />
        <img src={Cloud2} alt="cloud" className={styles[2].name} style={styles[2]} />

        <img src={backgroundfield} alt="field" className={styles[3].name} style={styles[3]} />
        <img src={House} alt="field" className={styles[4].name} style={styles[4]} />
        <img src={foreground} alt="field" className={styles[5].name} style={styles[4]} />

      </div>
    </div>
  );
};

export default Welcome;

import React, { useState } from "react";
import "./Welcome.css";
import WelcomeName from "../../components/welcomeName/WelcomeName";
//PICTURES
import BigCloud from "../../assets/bigcloud.png";
import Cloud1 from "../../assets/cloud1.png";
import Cloud2 from "../../assets/cloud2.png";
import backgroundfield from "../../assets/backgroundfield.png";
import House from "../../assets/house.png";
import foreground from "../../assets/foreground.png";

const Welcome = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log(e);
    setMousePosition({
      x: e.screenX,
      y: e.screenY,
    });
  };

  return (<>

    <div className="sky" onMouseMove={handleMouseMove}>
    <WelcomeName />
      {/* <div className="clouds-container"> */}
        <img
          src={BigCloud}
          alt="cloud"
          className="bigcloud"
          style={{
            transform: `translate(calc(${mousePosition.x / -100}px), calc(${mousePosition.y / -100}px))`
          }}
        />
        <img
          src={Cloud1}
          alt="cloud"
          className="cloud1"
          style={{
            transform: `translate(calc(${mousePosition.x / -110}px), calc(${mousePosition.y / -110}px))`
          }}
        />
        <img
          src={Cloud2}
          alt="cloud"
          className="cloud2"
          style={{
            transform: `translate(calc(${mousePosition.x / -70}px), calc(${mousePosition.y / -70}px))`
          }}
        />
      {/* </div> */}
      <img src={backgroundfield} alt="field" className="backgroundfield" style={{
        transform: `translate(calc(${mousePosition.x / -90}px), calc(${mousePosition.y / -90}px))`
      }} />
      <img src={House} alt="field" className="house" style={{
        transform: `translate(calc(${mousePosition.x / -80}px), calc(${mousePosition.y / -80}px))`
      }} />
      <img src={foreground} alt="field" className="grassForeground" style={{
        transform: `translate(calc(${mousePosition.x / -70}px), calc(${mousePosition.y / -70}px))`
      }} />
    </div>
  </>
  );
};

export default Welcome;

import React, { useState } from "react";
import "./Welcome.css";
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
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  return (
    <div className="sky" onMouseMove={handleMouseMove}>
      <div className="clouds-container">
        <img
          src={BigCloud}
          alt="cloud"
          className="bigcloud"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x / -120}px), calc(-50% + ${mousePosition.y / -120}px))`,
          }}
        />
        <img
          src={Cloud1}
          alt="cloud"
          className="cloud1"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x / -110}px), calc(-50% + ${mousePosition.y / -110}px))`,
          }}
        />
        <img
          src={Cloud2}
          alt="cloud"
          className="cloud2"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x / -100}px), calc(-50% + ${mousePosition.y / -100}px))`,
          }}
        />
      </div>
      <img src={backgroundfield} alt="field" className="backgroundfield" style={{
        transform: `translate(calc(-50% + ${mousePosition.x / -90}px), calc(-50% + ${mousePosition.y / -90}px))`,
      }} />
      <img src={House} alt="field" className="house" style={{
        transform: `translate(calc(-50% + ${mousePosition.x / -80}px), calc(-50% + ${mousePosition.y / -80}px))`,
      }} />
      <img src={foreground} alt="field" className="grassForeground" style={{
        transform: `translate(calc(-50% + ${mousePosition.x / -70}px), calc(-50% + ${mousePosition.y / -70}px))`,
      }} />
    </div>
  );
};

export default Welcome;

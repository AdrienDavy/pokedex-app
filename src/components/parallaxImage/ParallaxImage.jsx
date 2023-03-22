import React, { useState } from "react";

const ParallaxImage = ({ imageUrl, factor }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (clientX - centerX) * factor;
    const offsetY = (clientY - centerY) * factor;
    setOffsetX(offsetX);
    setOffsetY(offsetY);
  };

  return (
    <div className="parallax-image-container" onMouseMove={handleMouseMove}>
      <img
        src={imageUrl}
        alt="parallax"
        className="parallax-image"
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      />
    </div>
  );
};

export default ParallaxImage;

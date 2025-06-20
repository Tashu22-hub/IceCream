import React, { useState, useEffect } from "react";
import { cones } from "../data/Cone";
import "../Styles/Hero.css";

const Hero = ({ selectedCone, setSelectedCone }) => {
  const [animateCone, setAnimateCone] = useState(false);

  const handleConeClick = (cone) => {
    setAnimateCone(false); // Reset animation
    setSelectedCone(cone); // This updates App state!
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateCone(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [selectedCone]);

  return (
    <div className="hero-container" style={{ background: selectedCone.bgColor }}>
      <div className="hero-content">
        <h1 className="icecream">icecream</h1>
        <h2 className="cone-title">{selectedCone.name}</h2>
        <p className="cone-description">{selectedCone.description}</p>

        <div className="cone-buttons">
          {cones.map((cone) => (
            <div
              key={cone.id}
              className={`cone-thumbnail-wrapper ${
                selectedCone.id === cone.id ? "active" : "inactive"
              }`}
              onClick={() => handleConeClick(cone)}
            >
              <div className="cone-inner">
                <img
                  src={cone.image}
                  alt={cone.name}
                  className="cone-thumbnail"
                />
                <div className="bucket-border" />
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <div className="cone-image-wrapper">
        <img
          src={selectedCone.image}
          alt="Main Cone"
          className={`main-cone-img ${animateCone ? "animate-in" : ""}`}
        />
      </div>
    </div>
  );
};


export default Hero;

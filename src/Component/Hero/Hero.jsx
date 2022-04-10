import React from "react";
import "./Hero.style.css";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="hero-container">
            <img src={"/assets/hero_image@3x.png"} alt="Ice-cream Banner" />
            <h2 className="hero-text">BUILD UP YOUR ICECREAM UNIVERSE</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

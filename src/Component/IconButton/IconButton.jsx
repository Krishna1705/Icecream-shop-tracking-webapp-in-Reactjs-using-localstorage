import React from "react";
import "./IconButton.style.css";
import { useNavigate } from "react-router-dom";

const IconButton = () => {
  let navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="iconbutton-container" onClick={handleIconClick}>
        <img src={"/assets/arrow_left@2x.png"} alt="Round BackButton" />
      </div>
    </>
  );
};

export default IconButton;

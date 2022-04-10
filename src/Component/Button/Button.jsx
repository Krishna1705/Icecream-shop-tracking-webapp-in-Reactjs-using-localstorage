import React from "react";
import "./Button.style.css";

const Button = ({ buttonText }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="button-container">
            <button
              className={`button-style ${
                buttonText === "Add Location"
                  ? "addlocation"
                  : buttonText === "Save"
                  ? "save"
                  : null
              }`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;

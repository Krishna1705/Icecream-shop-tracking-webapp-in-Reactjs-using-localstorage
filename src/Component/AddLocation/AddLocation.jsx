import React from "react";
import IconButton from "../IconButton/IconButton";
import InputField from "../InputField/InputField";
import "./AddLocation.style.css";

const AddLocation = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="location-container">
            <div className="icon-input-container">
              <IconButton />
              <InputField />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLocation;

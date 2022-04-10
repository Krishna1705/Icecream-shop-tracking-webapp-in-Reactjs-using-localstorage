import React, { useState, useEffect } from "react";
import "./InputField.css";
import Button from "../Button/Button";

const InputField = () => {
  const defaultFormFields = {
    name: "",
    location: "",
    flavor: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [shopData, setShopData] = useState(
    JSON.parse(localStorage.getItem("shopData"))
      ? JSON.parse(localStorage.getItem("shopData"))
      : []
  );

  useEffect(() => {
    setShopData(JSON.parse(localStorage.getItem("shopData")));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (
      formFields.name == "" ||
      formFields.location == "" ||
      formFields.flavor == ""
    ) {
      return;
    }
    setShopData([...shopData, formFields]);
    resetFormFields();
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const shopDataArr = JSON.stringify(shopData);
  // save to localStorage
  localStorage.setItem("shopData", shopDataArr);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name"
              value={formFields.name}
              name="name"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <input
              type="text"
              placeholder="Location"
              value={formFields.location}
              name="location"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <input
              type="text"
              placeholder="Flavur(Comma Separated)"
              value={formFields.flavor}
              name="flavor"
              onChange={(e) => handleInputChange(e)}
            ></input>
          </div>
          <div className="btn-container" onClick={handleSave}>
            <Button buttonText="Save" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;

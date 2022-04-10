import React, { useState, useEffect } from "react";
import "./CardDetail.style.css";
import IconButton from "../IconButton/IconButton";
import { useLocation } from "react-router-dom";
const CardDetail = () => {
  const [cardItem, setCardItem] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    console.log("state", state);
    setCardItem(state.shopItem);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="card-detail-container">
          <div className="cardicon-container">
            <IconButton />
            {cardItem ? (
              <>
                <div className="card-detail-text">
                  <h2>{cardItem.name}</h2>
                  <div>{cardItem.location}</div>

                  <ul>
                    {cardItem.flavor &&
                      cardItem.flavor.split(",") &&
                      cardItem.flavor.split(",").map((item) => (
                        <>
                          <li>{item}</li>
                        </>
                      ))}
                  </ul>
                </div>
              </>
            ) : (
              "There is not any item inside shop"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

import React, { useEffect, useState } from "react";
import "./Card.style.css";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("shopData");
    const savedShopData = JSON.parse(data);
    setShopData(savedShopData);
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (shopItem) => {
    navigate("/cardDetail", { state: shopItem });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {!shopData || shopData.length == 0 ? (
            <>
              <div className="card-text-container">
                <div className="card-text">
                  <span>Ooops, Shop is Empty, Please add some items...</span>
                </div>
              </div>
            </>
          ) : (
            shopData &&
            shopData.map((shopItem) => (
              <>
                <div
                  className="card-text-container"
                  onClick={() => handleCardClick({ shopItem })}
                >
                  <div className="card-text">
                    <h2>{shopItem.name}</h2>
                    <span>{shopItem.location}</span>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Card;

import React from "react";
import "./CarInfoAndTrackInfoStyles.css";

const CarInfo = ({ carHp, carType, carPrice, handleClose, textButton }) => {
  return (
    <div>
      <div className="car-info__container">
        <h1>МОЩНОСТЬ: {carHp}</h1>
        <h1>ПРИВОД: {carType}</h1>
        <h1>ЦЕНА: {carPrice}</h1>
        <button onClick={handleClose}>{textButton}</button>
      </div>
    </div>
  );
};

export { CarInfo };

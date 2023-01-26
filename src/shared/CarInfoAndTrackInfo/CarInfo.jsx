import React from "react";
import "./CarInfoAndTrackInfoStyles.css";

const CarInfo = ({
  image,
  carHp,
  carType,
  carPrice,
  handleClose,
  textButton,
}) => {
  return (
    <div className="car-info__container">
      <img src={image} alt=" "></img>
      <h1>МОЩНОСТЬ: {carHp}</h1>
      <h1>ПРИВОД: {carType}</h1>
      <h1>ЦЕНА: {carPrice}</h1>
      <button onClick={handleClose}>{textButton}</button>
    </div>
  );
};

export { CarInfo };

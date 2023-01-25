import React from "react";
import { ModalButton } from "../Ui/ButtonAndModalStyles/ButtonStyles";
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
      <ModalButton onClick={handleClose}>{textButton}</ModalButton>
    </div>
  );
};

export { CarInfo };

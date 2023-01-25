import React from "react";
import { ModalButton } from "../Ui/ButtonAndModalStyles/ButtonStyles";

const TrackInfo = ({
  image,
  raceStatus,
  raceResults,
  raceStages,
  handleClose,
  textButton,
}) => {
  return (
    <div className="track-info__container">
      <img src={image} alt=" "></img>
      <h1>СТАТУС ГОНКИ: {raceStatus}</h1>
      <h1>РЕЗУЛЬТАТЫ ГОНКИ: {raceResults}</h1>
      <h1>ЭТАПОВ ВСЕГО: {raceStages}</h1>
      <ModalButton onClick={handleClose}>{textButton}</ModalButton>
    </div>
  );
};

export { TrackInfo };

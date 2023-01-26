import React from "react";

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
      <button onClick={handleClose}>{textButton}</button>
    </div>
  );
};

export { TrackInfo };

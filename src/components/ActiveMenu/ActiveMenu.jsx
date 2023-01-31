import React, { useState } from "react";
import "./ActiveMenuStyles.css";
import { Cars, Tracks } from "../ActiveMenuContent";

const ActiveMenu = () => {
  const [showCars, setShowCars] = useState(false);
  const [showTracks, setShowTracks] = useState(false);

  const handleShowCars = () => {
    setShowCars((prevState) => !prevState);
  };

  const handleShowTracks = () => {
    setShowTracks((prevState) => !prevState);
  };

  const showCarsText = showCars
    ? "ЗАКРЫТЬ КЛАССЫ КРОССОВЫХ МАШИН "
    : "ПОКАЗАТЬ КРОССОВЫЕ МАШИНЫ";

  const showTracksText = showTracks
    ? "ЗАКРЫТЬ СПИСОК ГОНОЧНЫХ ТРЕКОВ"
    : "ПОКАЗАТЬ ГОНОЧНЫЕ ТРЕКИ";

  return (
    <div className="active-menu__list-buttons">
      <div>
        <button className="list-buttons__opener" onClick={handleShowCars}>
          {showCarsText}
        </button>

        {showCars ? <Cars /> : null}
      </div>
      <div>
        <button className="list-buttons__opener" onClick={handleShowTracks}>
          {showTracksText}
        </button>
        {showTracks ? <Tracks /> : null}
      </div>
    </div>
  );
};

export default ActiveMenu;

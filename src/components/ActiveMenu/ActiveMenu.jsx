import React, { useState } from "react";
import "./ActiveMenuStyles/ActiveMenuStyles.css";
import { MenuButton } from "./ActiveMenuStyles/ActiveMenuButton";
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

  const showCarsText = showCars ? "ЗАКРЫТЬ КЛАССЫ МАШИН" : "КЛАССЫ МАШИН";

  const showTracksText = showTracks ? "ЗАКРЫТЬ ГОНОЧНЫЕ ТРЕКИ" : "ГОНОЧНЫЕ ТРЕКИ";

  return (
    <div className="active-menu__list-buttons">
      <div className="list-buttons__content">
        <MenuButton variant="outlined" onClick={handleShowCars}>
          {showCarsText}
        </MenuButton>
        {showCars ? <Cars /> : null}
      </div>

      <div className="list-buttons__content">
        <MenuButton variant="outlined" onClick={handleShowTracks}>
          {showTracksText}
        </MenuButton>
        {showTracks ? <Tracks /> : null}
      </div>
    </div>
  );
};

export default ActiveMenu;

import React, { useState } from "react";
import "./ActiveMenuStyles/ActiveMenuStyles.css";
import ContentCars from "../Content/ContentCars";
import ContentTracks from "../Content/ContentTracks";
import { MenuButton } from "./ActiveMenuStyles/ActiveMenuButton";

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
    ? "ТЕПЕРЬ Я ЗНАЮ ПРО МАШИНЫ"
    : "КАКИЕ КЛАССЫ МАШИН ЕСТЬ В КРОССЕ?";

  const showTracksText = showTracks
    ? "ТЕПЕРЬ Я ЗНАЮ ПРО ТРАССЫ"
    : "В КАКИХ ГОРОДАХ ПРОХОДЯТ ГОНКИ?";

  return (
    <div className="active-menu__box">
      <div className="box__content">
        <MenuButton variant="outlined" onClick={handleShowCars}>
          {showCarsText}
        </MenuButton>
        {showCars ? <ContentCars /> : null}
      </div>
      <div className="box__content">
        <MenuButton variant="outlined" onClick={handleShowTracks}>
          {showTracksText}
        </MenuButton>
        {showTracks ? <ContentTracks /> : null}
      </div>
    </div>
  );
};

export default ActiveMenu;

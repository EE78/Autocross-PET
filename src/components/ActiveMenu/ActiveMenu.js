import React, { useState } from "react";
import "./ActiveMenuStyles.css";
import ContentCars from "../ActiveMenuContent/ContentCars";
import ContentTracks from "../ActiveMenuContent/ContentTracks";
import { MenuButton } from "../../constants/constants";

const ActiveMenu = () => {
  const [showCars, setShowCars] = useState(false);
  const [showTracks, setShowTracks] = useState(false);

  return (
    <div className="active-menu__box">
      <div className="box__content">
        <MenuButton
          variant="outlined"
          onClick={() => {
            setShowCars(!showCars);
          }}
        >
          {showCars
            ? "ПОНЯТНО ПРО МАШИНЫ"
            : "КАКИЕ КЛАССЫ МАШИН ЕСТЬ В КРОССЕ?"}
        </MenuButton>
        {showCars ? <ContentCars /> : null}
      </div>
      <div className="box__content">
        <MenuButton
          variant="outlined"
          onClick={() => {
            setShowTracks(!showTracks);
          }}
        >
          {showTracks
            ? "ПОНЯТНО ПРО ТРАССЫ"
            : "В КАКИХ ГОРОДАХ ПРОХОДЯТ ГОНКИ?"}
        </MenuButton>
        {showTracks ? <ContentTracks /> : null}
      </div>
    </div>
  );
};

export default ActiveMenu;

import React, { useState } from "react";
import "./MenuStyles.css";
import RacingCars from "../MenuContent/RacingCars";
import RacingTracks from "../MenuContent/RacingTracks";
import { MenuButton } from "../../constants/constants";

function Menu() {
  const [showCars, setShowCars] = useState(false);
  const [showTracks, setShowTracks] = useState(false);

  return (
    <div className="menu__container">
      <div className="container__button-and-modals">
        <MenuButton
          onClick={() => {
            setShowCars(!showCars);
          }}
        >
          {showCars ? "ПОНЯТНО ПРО МАШИНЫ" : "НА КАКИХ МАШИНАХ ГОНЯЮТ?"}
        </MenuButton>
        {showCars ? <RacingCars /> : null}
      </div>

      <div className="container__button-and-modals">
        <MenuButton
          onClick={() => {
            setShowTracks(!showTracks);
          }}
        >
          {showTracks ? "ПОНЯТНО ПРО ТРАССЫ" : "НА КАКИХ ТРАССАХ ГОНЯЮТ?"}
        </MenuButton>
        {showTracks ? <RacingTracks /> : null}
      </div>
    </div>
  );
}

export default Menu;

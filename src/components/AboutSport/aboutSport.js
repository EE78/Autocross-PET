import React, { useState } from "react";
import "./aboutSportStyles.css";
import { Button } from "@mui/material";
import Menu from "../Menu/menu";

function InfoAboutSport() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="info__container">
        <p className="info__text">
          Автокросс и ралли-кросс - виды автомобильного спорта. Представляет
          собой кольцевые заезды по трассе, не имеющей асфальто-бетонного
          покрытия, либо частично покрытой асфальтом. Все пилоты стартуют
          одновремменно, в соответствии с результатами квалификации. Все
          автомобили делятся на несколько классов, согласно уровню подготовки.
          Считаются одними из самых зрелищных видов автогонок.
        </p>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            setShowMenu(
              !showMenu
            );
          }}
        >
          {!showMenu ? "НА СТАРТ !!!"   : "СОЙТИ С ЗАЕЗДА :("}
        </Button>
      </div>
   
      {showMenu? <Menu /> : null}
    </div>
  );
}

export default InfoAboutSport;

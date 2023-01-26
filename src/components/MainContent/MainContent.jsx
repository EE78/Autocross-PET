import React from "react";
import rkrlogo from "./images/rkrlogo.png";
import "./MainContentStyles.css";
import ActiveMenu from "../ActiveMenu/ActiveMenu";

export const MainContent = () => {
  return (
    <div className="main-content__wrapper">
      <div className="wrapper__text-content">
        <div className="text-content__logos">
          <img alt="Logo" src={rkrlogo} />
          <img alt="Logo" src={rkrlogo} />
        </div>
        <h1>СИБИРСКИЙ АВТОКРОСС</h1>
        <p>
          Автокросс и ралли-кросс - виды автомобильного спорта. Представляет
          собой кольцевые заезды по трассе, не имеющей асфальто-бетонного
          покрытия, либо частично покрытой асфальтом. Все пилоты стартуют
          одновременно, в соответствии с результатами квалификации. Все
          автомобили делятся на несколько классов, согласно уровню подготовки.
          Считаются одними из самых зрелищных видов автогонок.
        </p>
      </div>
      <ActiveMenu />
    </div>
  );
};

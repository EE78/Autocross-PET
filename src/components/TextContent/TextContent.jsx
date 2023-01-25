import React from "react";
import rkrlogo from "./images/rkrlogo.png";
import "./TextContentStyles.css";

const TextContent = () => {
  return (
    <div className="text-content__container">
      <img alt="Logo" src={rkrlogo} />
      <h1>СИБИРСКИЙ АВТОКРОСС</h1>
      <p>
      Автокросс и ралли-кросс - виды автомобильного спорта. Представляет собой
      кольцевые заезды по трассе, не имеющей асфальто-бетонного покрытия, либо
      частично покрытой асфальтом. Все пилоты стартуют одновременно, в
      соответствии с результатами квалификации. Все автомобили делятся на
      несколько классов, согласно уровню подготовки. Считаются одними из самых
      зрелищных видов автогонок.
    </p>
    </div>
  );
};

export default TextContent;

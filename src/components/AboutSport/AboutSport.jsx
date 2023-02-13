import React from "react";
import "./AboutSportStyles.css";
import {WrapperText, WrapperButton}  from "./AboutSportStyled";

export const AboutSport = ({ handleClose }) => {
  return (
    <div >
      <WrapperText>
        Автокросс представляет собой кольцевые заезды по трассе, не имеющей
        асфальто-бетонного покрытия, либо частично покрытой асфальтом. Все
        пилоты стартуют одновременно, в соответствии с результатами
        квалификации. Все автомобили делятся на несколько классов, согласно
        уровню подготовки. Автокросс широко распространен в Сибирском
        Федеральном Округе. Кроссовые трассы, на которых проходят автогонки
        различного уровня и статуса, распологаются в каждом регионе Сибири.
      </WrapperText>
      <WrapperButton onClick={handleClose}>ЗАКРЫТЬ ПОДРОБНОЕ ОПИСАНИЕ</WrapperButton>
    </div>
  );
};
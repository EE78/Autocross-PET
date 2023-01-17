import React from "react";
import "./MainContainerStyles.css";
import rkrlogo from "./MainContainerImage/rkrlogo.png";
import AboutSport from "../AboutSport/AboutSport";

function MainContainer() {
  return (
    <div>
      <div className="header__content">
        <div className="logo">
          <img alt="rcr" src={rkrlogo}></img>
        </div>
        <div className="start-page__container">
          <div className="container__title">
            <p className="title__caption">Автокросс и Ралли-кросс</p>
            <p className="title__quote">
              «Даже когда у вас не лучшая машина, всегда надо верить, что именно
              эта гонка станет вашей лучшей»</p>
              <p className="quote__author">Айртон Сенна</p>
            
          </div>
        </div>
        <AboutSport />
      </div>
    </div>
  );
}

export default MainContainer;

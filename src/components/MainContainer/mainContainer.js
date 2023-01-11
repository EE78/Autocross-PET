import React from "react";
import "./mainContainerStyles.css";
import rkrlogo from "../../images/rkrlogo.png";
import InfoAboutSport from "../AboutSport/aboutSport";

function MainContainer() {
  return (
    <div>
      <div className="header__content">
          <div className="left__logo">
            <img  alt="rcr" src={rkrlogo}></img>
          </div>
        <div className="start-page__container">
          <div className="container__title">
            <p className="title__caption">Автокросс и Ралли-кросс</p>
            <p className="title__quote">
              «Даже когда у вас не лучшая машина, всегда надо верить, что именно
              эта гонка станет вашей лучшей»
              <p className="quote__author">- Айртон Сенна</p>
            </p>
          </div>
          <div className="container__image">

          </div>
        </div>
        <InfoAboutSport />
      </div>
    </div>
  );
}

export default MainContainer;

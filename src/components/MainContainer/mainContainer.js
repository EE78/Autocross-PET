import React from "react";
import "./mainContainerStyles.css";
import audi from "../../images/audi.png";
// import Events from "../Events/events";
import InfoAboutSport from "../AboutSport/aboutSport";

function MainContainer() {
  return (
    <div>
      <div className="header__content">
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
            <img className="image__car" alt="audi" src={audi}></img>
          </div>
        </div>
        <InfoAboutSport />
        {/* <Events /> */}
      </div>
    </div>
  );
}

export default MainContainer;

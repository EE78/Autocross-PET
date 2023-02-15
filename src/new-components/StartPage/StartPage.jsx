import React from "react";
import {
  WrapperText,
  MenuTitle,
  StartPageWrapper,
  WrapperButton,
  MenuLink,
} from "./StyledStartPage";
import rallyx from "./images/rallyx.png";
import "./styles.css";

export const Start = () => {
  return (
    <StartPageWrapper>
      <div className="wrapper__menu">
        <MenuTitle>АВТОМОБИЛЬНЫЙ КРОСС</MenuTitle>
        <div className="menu__links">
          <MenuLink>О КРОССЕ</MenuLink>
          <MenuLink>АВТОМОБИЛИ</MenuLink>
          <MenuLink>ГОНОЧНЫЕ ТРЕКИ</MenuLink>
          <MenuLink>ЛИТЕРАТУРА</MenuLink>
          <MenuLink>ГАЛЕРЕЯ</MenuLink>
        </div>
      </div>
      <div className="startpage__content">
        <div className="startpage__content-left">
          <WrapperText>
            Кросс — очень напряженная и увлекательная дисциплина, полная
            неожиданностей, борьбы и настоящих поединков на трассе.
            <br></br>
            <br></br>Это быстроразвивающаяся дисциплина в автомобильном спорте.
            Очень быстрые автомобили, постоянно совершенствующиеся, великолепные
            трассы европейского уровня по всей России — все это делает
            автомобильный кросс очень привлекательным для спортсменов и
            зрителей.
          </WrapperText>
        </div>
        <div className="startpage__content-right">
          <img
            src={rallyx}
            className="startpage__image"
            alt="rally-cross"
          ></img>
        </div>
      </div>
      <WrapperButton>ХОЧУ УЗНАТЬ БОЛЬШЕ О КРОССЕ</WrapperButton>
    </StartPageWrapper>
  );
};

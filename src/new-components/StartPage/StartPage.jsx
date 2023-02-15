import React, { useState } from "react";
import {
  WrapperText,
  MenuTitle,
  StartPageWrapper,
  WrapperButton,
  ModalText,
  ModalButton,
  MenuLink,
} from "./StyledStartPage";
import rallyx from "./images/rallyx.png";
import "./styles.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalStyles } from "../../shared/Ui/ButtonAndModalStyles/ModalStyles";

export const Start = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showInfo = () => {
    setIsOpen(true);
  };
  const closeInfo = () => {
    setIsOpen(false);
  };

  return (
    <StartPageWrapper>
      <div className="wrapper__menu">
        <MenuTitle>СИБИРСКИЙ КРОСС</MenuTitle>
        <div  className="menu__links">
          <MenuLink>АВТОМОБИЛИ</MenuLink>
          <MenuLink>ГОНОЧНЫЕ ТРЕКИ</MenuLink>
          <MenuLink>ДОКУМЕНТАЦИЯ</MenuLink>
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
      <WrapperButton onClick={showInfo}>
        Хочу получить больше информации про автокросс
      </WrapperButton>
      <Modal open={isOpen} onClose={closeInfo} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={ModalStyles}>
            <ModalText>
              Автокросс — это группа дисциплин автомобильного спорта, являющих
              собой соревнования на скорость с одновременным стартом (гонки). В
              них определяющее значение имеет порядок пересечения финишной
              линии, количество пройденных кругов и время прохождения дистанции.
              Соревнования по автокроссу проводятся на кольцевых трассах без
              покрытия либо с насыпным покрытием (грунт, песок, крошка, гравий и
              т.п.), закрытых для постороннего движения.
              <br></br>
              <br></br>Автомобильный кросс на сегодняшний день завоевал очень
              большую популярность и среди гонщиков, и среди болельщиков.
              Спортсменов привлекает более доступная цена подготовки автомобиля,
              и вместе с этим — большие возможности для реализации своих навыков
              пилотирования, напряженная борьба, иногда даже агрессивная
              атмосфера гонки, где в каждом заезде участвуют несколько
              автомобилей, и побеждает действительно самый уверенный, умелый и
              решительный.
              <br></br>
              <br></br>Разнообразие классов, от классических «Жигулей» до
              специальных кроссовых автомобилей «багги», превращает каждый
              кроссовый этап в зрелище на любой вкус!
              <br></br>
              <br></br>Автокросс широко распространен в Сибирском Федеральном
              Округе. Кроссовые трассы, на которых проходят автогонки различного
              уровня и статуса, располагаются в каждом регионе Сибири.
            </ModalText>
            <ModalButton onClick={closeInfo}>Закрыть информацию</ModalButton>
          </Box>
        </Fade>
      </Modal>
    </StartPageWrapper>
  );
};

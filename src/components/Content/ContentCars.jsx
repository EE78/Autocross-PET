import React, { useState } from "react";
import "./ContentStyles.css";
import { CrossCars } from "./ContentDB";
import { MenuModalStyles } from "../../shared/Ui/ContentModalStyles";
import { ModalMenuButton } from "../../shared/Ui/ContentButtonStyles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import rkrlogo from "./Images/rkrlogo.png";

// ВЫНЕСТИ В INDEX.JS ДЛЯ РЕЭКСПОРТА

const ContentCars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carHp, setCarHp] = useState("");
  const [carType, setCarType] = useState("");
  const [carPrice, setCarPrice] = useState("");

  const СhooseCar = CrossCars.map((car) => {
    return (
      <div>
        <ModalMenuButton
          onClick={() => {
            setIsOpen(true);
            setCarHp(car.hp);
            setCarType(car.type);
            setCarPrice(car.price);
          }}
          key={car}
        >
          {car.class}
        </ModalMenuButton>
      </div>
    );
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="active-menu__content">{СhooseCar}</div>
      <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={isOpen}>
          <Box sx={MenuModalStyles}>
            {/* ВЫНЕСТИ В SHARED/UI */}
            <div className="active-menu__modal">
              <img src={rkrlogo} alt=" "></img>
              <div className="modal__info">
                <div className="info__element">
                  <h1 className="element__name">МОЩНОСТЬ:</h1>
                  <p className="element__value">{carHp}</p>
                </div>
                <div className="info__element">
                  <h1 className="element__name">ПРИВОД:</h1>
                  <p className="element__value">{carType}</p>
                </div>
                <div className="info__element">
                  <h1 className="element__name">ЦЕНА:</h1>
                  <p className="element__value">{carPrice}</p>
                </div>
              </div>
              <ModalMenuButton onClick={handleClose}>
                ВЕРНУТЬСЯ К СПИСКУ КЛАССОВ АВТОМОБИЛЕЙ
              </ModalMenuButton>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContentCars;
